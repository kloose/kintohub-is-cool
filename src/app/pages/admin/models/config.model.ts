import { ModelType } from '../../../shared/modelType.model';

export class Config {
    id?: number;
    key: string;
    value: string;
    defaultValue: boolean;
    modelType: ModelType;
    modelId?: string;
}

export interface CreateConfig {
    key: string;
    value: string;
    defaultValue: boolean;
    modelType: ModelType;
    modelId?: string;
}

export interface UpdateConfig {
    id?: number;
    key: string;
    value: string;
    defaultValue: boolean;
    modelType: ModelType;
    modelId?: string;
}
