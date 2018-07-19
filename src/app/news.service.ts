import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = 'https://newsapi.org/v2/everything?sources=hacker-news&apiKey=0be86e2d9f294b4d877d14093d285ecd';

  constructor(private http: HttpClient) { }

  fetchNews(size, page, query): Observable<any> {
    return this.http.get<any>(this.url
      + '&pageSize=' + size
      + '&page=' + page
      + '&q=' + query
    );
  }

}
