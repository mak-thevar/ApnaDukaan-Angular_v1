import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { API_URLS } from '../configs/apiConfigs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }


  //API_URL = 'https://jsonplaceholder.typicode.com/posts';

  fetchPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(API_URLS.GET_POST);
  }

}
