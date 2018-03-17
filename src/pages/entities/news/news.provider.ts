import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Api } from '../../../providers/api/api';
// todo: handle dates

import { News } from './news.model';

@Injectable()
export class NewsService {
    private resourceUrl = Api.API_URL + '/news';

    constructor(private http: HttpClient) { }

    create(news: News): Observable<News> {
        return this.http.post(this.resourceUrl, news);
    }

    update(news: News): Observable<News> {
        return this.http.put(this.resourceUrl, news);
    }

    find(id: number): Observable<News> {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<any> {
        return this.http.get(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response', responseType: 'text' });
    }
}
