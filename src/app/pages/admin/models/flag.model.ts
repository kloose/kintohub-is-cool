export class Flag {
    id?: number;
    key: string;
    category: string;
    enabled: boolean;
}

export interface CreateFlag {
    key: string;
    category: string;
    enabled: boolean;
}

export interface UpdateFlag {
    id?: number;
    key: string;
    category: string;
    enabled: boolean;
}

