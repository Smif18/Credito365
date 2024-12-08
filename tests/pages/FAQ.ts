import { Locator, Page} from '@playwright/test'
export class FAQ{

    readonly page: Page;
    readonly header: Locator;
    readonly accordionItems: Locator;
    readonly accordionLables: Locator;
    readonly accordionContents: Locator;
    readonly accordionInput: Locator;

    constructor(page: Page) {
    this.page = page;
    this.header = page.locator('h1', { hasText: 'Pregunta frecuentes' });
    this.accordionItems = page.locator('.accordion-item');
    this.accordionLables = page.locator('.accordion-item .tab-label span');
    this.accordionContents = page.locator('.accordion-item .tab-content__inner');

    }

    //Accordion headings and contents
    expectedLables = ['¿Qué es un crédito en línea de bajo monto?', '¿Cuáles son los requisitos para solicitar un crédito en línea?',
    '¿Qué documentos necesito proporcionar para la solicitud?', '¿Cuánto puedo solicitar como préstamo?',
    '¿Cómo funciona el proceso de solicitud en línea?', '¿Cuánto tiempo lleva aprobar una solicitud?',
    '¿Cómo se toma la decisión de aprobación?', '¿Qué sucede si mi solicitud es rechazada?',
    '¿Hay algún costo asociado con la solicitud de un crédito?', '¿Puedo solicitar un crédito si tengo mal historial crediticio?',
    '¿Cómo puedo verificar el estado de mi solicitud?', '¿Qué sucede después de que mi solicitud es aprobada?',
    '¿Puedo cambiar el monto del préstamo después de la aprobación?', '¿Cuándo y cómo se realizará la transferencia de fondos?',
    '¿Puedo pagar mi préstamo antes de la fecha de vencimiento sin penalización?', '¿Qué opciones de pago están disponibles?',
    '¿Qué sucede si no puedo realizar un pago a tiempo?', '¿Se pueden renovar o refinanciar los préstamos?',
    '¿Cuáles son las políticas de privacidad y seguridad de la compañía?', '¿Cómo puedo consultar mi saldo y el estado de mi préstamo?',
    '¿Puedo solicitar otro préstamo mientras aún tengo uno pendiente?', '¿Qué medidas de seguridad se toman para proteger mis datos personales?',
    '¿Qué sucede si cambia mi información de contacto?'];

    expectedContents = [
      'Un crédito en línea de bajo monto es un pequeño préstamo que puedes solicitar y gestionar a través de nuestra página web de una manera rápida',
      'Debes ser mayor de edad, tener un documento de identificación colombiano, y demostrar capacidad de pago',
      'Únicamente la foto de tu documento de identidad, donde tu información se vea clara',
      'Puedes solicitar créditos desde 100 000 pesos y hasta 1 000 000 de pesos colombianos',
      'Digita y confirma el número de tu celular a través de un código SMS, completa la información del formulario y sigue las instrucciones',
      'Normalmente, la aprobación demora de 2 a 15 minutos, sin embargo, el proceso de aplicación depende de tu disposición para completar el formulario',
      'En Tech365 SAS a través de la plataforma credito365.co utilizamos plataformas y softwares que nos permiten procesar y analizar datos de un modo eficiente y lo más precisa posible para que los resultados sean arrojados de manera imparcial',
      'Serás notificado de manera inmediata y podrás solicitar un nuevo crédito en 30 días, cuando nuestras bases de datos se actualicen',
      'No, el proceso de solicitud no tiene ningún costo',
      'Sí, consideramos solicitudes de todas las personas que cumplan los requisitos mínimos',
      'Generalmente sabrás el estado de tu crédito durante la solicitud, sin embargo, si ya tienes un perfil en nuestro sitio web, puedes ingresar a tu perfil y revisar todos los movimientos y solicitudes asociadas a tu cuenta',
      'Enviaremos el dinero directamente a la cuenta bancaria que registraste durante el proceso de solicitud',
      'No, el crédito será procesado y transferido por la cantidad solicitada inicialmente, una vez la después sea arrojada por el sistema, no será posible hacer modificaciones al valor inicial',
      'La transferencia se realizará lo más pronto posible después de la aprobación del crédito y se hará a través de transferencia bancaria directamente a tu cuenta',
      'Por supuesto, puedes pagar anticipadamente sin penalización',
      'Puedes hacer el pago de tu crédito a través del botón PSE en nuestra plataforma o transferencia a nuestro número de cuenta 23000008967 del Bancolombia, no olvides indicar el número del crédito y/o tu número de cedula',
      'Puedes ingresar a la plataforma y solicitar una extensión del crédito, así podrás evitar los intereses por mora y mantener positivo tu historial crediticio',
      'Lamentablemente no ofrecemos esas alternativas actualmente, sin embargo, siempre puedes extender el plazo para pagar tu crédito',
      'Puedes consultarlos haciendo clic aqui en politica de datos y terminos y condiciones.',
      'Puedes verificar todos los movimientos asociados a tu cuenta iniciando sesión e ingresando a tu perfil con tu usuario y contraseña',
      'No, solo puedes tener un crédito activo a la vez, si deseas un crédito nuevo debes pagar el crédito que tengas actualmente',
      'Tech365 SAS se adhiere y respeta la ley colombiana de protección de datos personales 1581 de 2012',
      'Si tu información personal cambia, es importante que entres en contacto con nosotros a través del correo electrónico ayuda@credito365.co indicando el porqué de tu nueva información'
    ];

}