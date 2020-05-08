import { ModelType } from '../../../shared/modelType.model';

export class Option {
    id?: number;
    key: string;
    value: string;
    targetField: string;
    source?: ModelType;
    target: ModelType;
}

export interface CreateOption {
    key: string;
    value: string;
    targetField: string;
    source?: ModelType;
    target: ModelType;
}

export interface UpdateOption {
    id?: number;
    key: string;
    value: string;
    targetField: string;
    source?: ModelType;
    target: ModelType;
}
