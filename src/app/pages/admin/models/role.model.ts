export class Role {
    id?: number;
    name: string;
    permissions: string[];
    users: string[];
}

export interface CreateRole {
    key: string;
    name: string;
}

export interface UpdateRole {
    id?: number;
    name: string;
    permissions: string[];
    users: string[];
}

