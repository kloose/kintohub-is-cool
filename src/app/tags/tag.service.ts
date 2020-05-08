import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tag } from './models/tag.model';
import { ModelType } from '../shared/modelType.model';
import { QueryResultsModel, SearchModel } from '../shared/crud';

const API_TAG_URL = `${environment.adminServiceUrl}/tag`;

@Injectable()
export class TagService {

    constructor(private http: HttpClient) {}

	getOptionsWithAuth() {
		return { headers: this.getHeadersWithToken() };
	}

	getHeadersWithToken(): HttpHeaders {
		const accessToken = localStorage.getItem(environment.accessTokenKey);
		const httpHeaders = new HttpHeaders();
		httpHeaders.set('Authorization', 'Bearer ' + accessToken);
		httpHeaders.set('Content-Type', 'application/json');
		httpHeaders.append('Authorization', 'Bearer ' + accessToken);
		console.log('Returning httpHeaders', httpHeaders);
		return httpHeaders;
	}

	findTags(queryParams: SearchModel): Observable<QueryResultsModel> {
		return this.http.post<QueryResultsModel>(API_TAG_URL + '/search', queryParams, {});
	}

    getAllTags(): Observable<Tag[]> {
        return this.http.get<Tag[]>(API_TAG_URL);
    }

    getTagById(tagId: number): Observable<Tag> {
		return this.http.get<Tag>(API_TAG_URL + `/${tagId}`);
    }

	createTag(tag: Tag): Observable<Tag> {
    	return this.http.post<Tag>(API_TAG_URL, tag, { headers: this.getHeadersWithToken() });
	}
	updateTag(tag: Tag): Observable<any> {
		return this.http.put(API_TAG_URL, tag, { headers: this.getHeadersWithToken()  });
	}

	deleteTag(tagId: number): Observable<Tag> {
		const url = `${API_TAG_URL}/${tagId}`;
		return this.http.delete<Tag>(url);
	}

	getTagsForModel(modelType: ModelType) {
		return this.http.get<Tag[]>(`${URL}?modelType=${modelType}`)
	}
}
