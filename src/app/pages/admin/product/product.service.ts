import { Injectable, SkipSelf } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { CreateProduct, Product, UpdateProduct } from './product.model';
import { SearchRequest, SearchResult } from '../../../shared/crud';

const API_PRODUCT_URL = `${environment.adminServiceUrl}/product`;

@Injectable()
export class ProductService {

  constructor(@SkipSelf() private http: HttpClient) {
  }

  findProducts(queryParams: SearchRequest): Observable<SearchResult<Product>> {
    const headers = new HttpHeaders();
    const accessToken = localStorage.getItem(environment.accessTokenKey);
    headers.set('Authorization', 'Bearer ' + accessToken);
    return this.http.post<SearchResult<Product>>(`${API_PRODUCT_URL}/search`, queryParams, {headers});
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<SearchResult<Product>>(API_PRODUCT_URL).pipe(map(result => result.results));
  }

  findProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(API_PRODUCT_URL + `/${productId}`);
  }

  createProduct(createProduct: CreateProduct): Observable<Product> {
    console.log('Creating', createProduct);
    return this.http.post<Product>(API_PRODUCT_URL, createProduct, {});
  }

  updateProduct(updateProduct: UpdateProduct): Observable<any> {
    return this.http.put(API_PRODUCT_URL, updateProduct, {});
  }

  deleteProduct(productId: number): Observable<Product> {
    const url = `${API_PRODUCT_URL}/${productId}`;
    return this.http.delete<Product>(url);
  }
}
