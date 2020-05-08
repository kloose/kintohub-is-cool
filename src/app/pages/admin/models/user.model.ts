export class User {
    id?: number;
    firstName: string;
    lastName: string;
}

export interface CreateUser {
    firstName: string;
    lastName: string;
}

export interface UpdateUser {
    id?: number;
    firstName: string;
    lastName: string;
}

