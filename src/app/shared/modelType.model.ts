export enum ModelType {
    PERSON= 'PERSON',
    CLIENT= 'CLIENT',
    COMPANY = 'COMPANY',
    ADDRESS = 'ADDRESS',
    PRODUCT = 'PRODUCT',
    TELEPHONE_NUMBER = 'TELEPHONE_NUMBER',
    EMAIL_ADDRESS = 'EMAIL_ADDRESS'
}

export function getModelTypes(): ModelType[] {
    return [
        ModelType.PERSON,
        ModelType.COMPANY,
        ModelType.ADDRESS,
        ModelType.TELEPHONE_NUMBER,
    ]
}