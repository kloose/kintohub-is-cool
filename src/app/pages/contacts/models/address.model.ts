import { ModelType } from '../../../shared/modelType.model';
import { Tag } from '../../../tags/models/tag.model';

export class Address {
    id: number;
    modelKey: string;
    modelType: ModelType;
    line1: string;
    line2?: string;
    line3?: string;
    line4?: string;
    line5?: string;
    state: string;
    city: string;
    postCode?: string;
    country: string;
    tags: Tag[];

    clear() {
        this.line1 = '';
        this.state = '';
        this.city = '';
        this.postCode = '';
        this.country = '';
        this.tags = [];
    }

}

export interface CreateAddress {
    key: number;
    modelKey: string;
    modelType: ModelType;
    line1: string;
    line2?: string;
    line3?: string;
    line4?: string;
    line5?: string;
    state: string;
    city: string;
    postCode?: string;
    country: string;
    tags: Tag[];
}

export interface UpdateAddress {
    key: number;
    modelKey: string;
    modelType: ModelType;
    line1: string;
    line2?: string;
    line3?: string;
    line4?: string;
    line5?: string;
    state: string;
    city: string;
    postCode?: string;
    country: string;
    tags: Tag[];
}
