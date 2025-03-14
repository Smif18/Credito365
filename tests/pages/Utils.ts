export function generateRandomPhoneNumber(): string {
    const prefixes = [
        '57300', '57301', '57302', '57303', '57304', '57305', 
        '57310', '57311', '57312', '57313', '57314', '57315', 
        '57316', '57317', '57318', '57319', '57320', '57321', 
        '57322', '57323', '57324', '57333', '57350', '57351'
    ];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomNumbers = Array.from({ length: 7 }, () => Math.floor(Math.random() * 10)).join('');
    return `${prefix}${randomNumbers}`;
}