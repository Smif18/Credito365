import { test, expect, APIRequestContext, request as playwrightRequest } from '@playwright/test';
import { Step1 } from './registration_steps/Step1';
import { Step3RegulaFront } from './registration_steps/Step3RegulaFront';
import { Step4PersonalInfo } from './registration_steps/Step4PersonalInfo';
import { Step5AdditionalInfo} from './registration_steps/Step5AdditionalInfo';
import { generateRandomPhoneNumber } from './pages/Utils';

test.describe('User Registration & Token Retrieval', () => {
    let step1: Step1;
    let step3: Step3RegulaFront;
    let step4: Step4PersonalInfo;
    let step5: Step5AdditionalInfo;
    let mobile_phone: string;
    let codeOTP: string;
    let authToken: string;
    let apiRequest: APIRequestContext;

    test.beforeAll(async () => {
        // 1. Создаем APIRequestContext вручную
        apiRequest = await playwrightRequest.newContext();

        step1 = new Step1(apiRequest); 
        step3 = new Step3RegulaFront(apiRequest); 
        mobile_phone = generateRandomPhoneNumber(); 

        // 2. Создаем пользователя только один раз в beforeAll
        const { response: createResponse, body: createBody } = await step1.createUser(mobile_phone, 'http://credito365MishaTest.co');
        expect(createResponse.status()).toBe(201);
        expect(createBody).toHaveProperty('code'); // Получаем OTP-код

        codeOTP = createBody.code; // Сохраняем код подтверждения

        // 3. Получаем токен только один раз для этого пользователя
        const { response: tokenResponse, body: tokenBody } = await step1.getToken(mobile_phone, codeOTP);
        expect(tokenResponse.status()).toBe(200);
        expect(tokenBody).toHaveProperty('token');

        authToken = `Bearer ${tokenBody.token}`; // Сохраняем токен
        console.log(`Токен успешно получен: ${authToken}`);
    });

    test.afterAll(async () => {
        await apiRequest.dispose(); // Закрываем APIRequestContext
    });


    test('Uploading front side of ID', async ({ request}) => {
        // Загружаем документ с полученным токеном
        const response1 = await step3.uploadDocument(authToken);
        
        // Проверяем ответ
        expect(response1).toHaveProperty('is_pass', true);

        const response2 = await step3.uploadDocumentBack(authToken);
        
        // Проверяем ответ
        expect(response2).toHaveProperty('is_pass', true);

        const body = await step3.getFileUploadResult(authToken);

        // Проверки
        expect(body.id).toBeTruthy();
        expect(body.registration_step).toBe(3);
        expect(body.mobile_phone).toBe(mobile_phone);
        expect(body.loan_processing_enabled).toBe(true);
        expect(body.in_black_list).toBe(false);
        expect(body.target_url).toBe('http://credito365MishaTest.co');
    
        // Проверяем, что документы успешно загружены
        expect(body.regula["10"].is_pass).toBe(true);
        expect(body.regula["11"].is_pass).toBe(true);
        expect(body.regula["10"].thumbs).toMatch(/^https:\/\/.*\/documents\/uploads\/show\/\d+\?.*/);
        expect(body.regula["11"].thumbs).toMatch(/^https:\/\/.*\/documents\/uploads\/show\/\d+\?.*/);

        // Проверка прохождения шага 4
        const step4 = new Step4PersonalInfo(request);
        const personalId = step4.generatePersonalId();
    
        // Отправляем запрос
        const response = await step4.submitPersonalInfo(authToken, personalId);
    
        // Проверяем статус-код
        expect(response.status()).toBe(200);
    
        // Получаем JSON-ответ
        const responseBody = await response.json();
    
        // Проверяем, что данные совпадают
        expect(responseBody).toMatchObject({
            first_name: "Test",
            last_name: "Verifone",
            personal_id: personalId,
            date_of_birth: "1993-01-01",
            personal_id_issue_date: "2011-01-01",
            registration_step: 4

        })
        // Проверка прохождения шага 5
        const step5 = new Step5AdditionalInfo(request)

        // Отправляем запрос
        const responseStep5 = await step5.sendAdditionalInfo(authToken);
    
        // Проверяем статус-код
        expect(responseStep5.status()).toBe(200);
    
        // Получаем JSON-ответ
        const responseBodyStep5 = await responseStep5.json();

        // Проверяем, что данные совпадают
        expect(responseBodyStep5).toMatchObject({
            region_registered: 1,
            city_registered: 2,
            neighborhood_registered: "Autotest neighborhood",
            street_type_registered: 23,
            house_registered: "1-a-3",
            gender: "m"
        });

    });
    });