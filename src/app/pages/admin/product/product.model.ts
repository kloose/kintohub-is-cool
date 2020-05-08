export class Product {
    id: number;
    name?: string;
    category?: string;
    subCategory?: string;

    clear() {
        this.name = '';
        this.category = '';
        this.subCategory = '';
    }

}

export interface CreateProduct {
    name: string;
    category?: string;
    subCategory?: string;
}

export interface UpdateProduct {
    id: number;
    category?: string;
    subCategory?: string;
}
