import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { API_URLS } from '../configs/apiConfigs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  fetchProducts() : Observable<Post[]>{
    return this.httpClient.get<Post[]>(API_URLS.GET_POST);
  }

}
