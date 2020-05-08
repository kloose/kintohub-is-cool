export class EmailAddress {
    id: number;
    address: string;
    tags: string[];
    primary: boolean;

    clear() {
        this.address = '';
        this.tags = [];
        this.primary = false;
    }

}

export interface CreateEmailAddress {
    address: string;
    type: string;
    primary: boolean;
}

export interface UpdateEmailAddress {
    id: number;
    address: string;
    type: string;
    primary: boolean;
}
