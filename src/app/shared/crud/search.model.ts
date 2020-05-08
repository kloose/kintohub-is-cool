import { ModelType } from '../modelType.model';

export interface SearchRequest {
	sort: SearchSort[];
	filter: string;
	pageIndex: number;
	pageSize: number;
	instanceId?: string;
	modelId?: string;
	modelType?: ModelType;
}

export interface SearchSort {
	direction: string,
	column?: string
}

export interface SearchResult<T> {
	results: T[];
	pageNumber: number;
	pageSize: number;
	totalSize: number;
}

export function defaultSearchRequest(modelType?: ModelType, modelId?: string): SearchRequest {
	return {
		pageSize: 10,
		pageIndex: 0,
		filter: '',
		sort: [],
		modelType,
		modelId
	};
}