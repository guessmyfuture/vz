import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Api } from '../../../providers/api/api';
// todo: handle dates

import { Albums } from './albums.model';

@Injectable()
export class AlbumsService {
    private resourceUrl = Api.API_URL + '/albums';

    constructor(private http: HttpClient) { }

    create(albums: Albums): Observable<Albums> {
        return this.http.post(this.resourceUrl, albums);
    }

    update(albums: Albums): Observable<Albums> {
        return this.http.put(this.resourceUrl, albums);
    }

    find(id: number): Observable<Albums> {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<any> {
        return this.http.get(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response', responseType: 'text' });
    }
}
