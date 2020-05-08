import { AuthenticationToken } from './authentication-token.model';

export class User {
    id: number;
    username?: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: AuthenticationToken;
    email: string;
}
