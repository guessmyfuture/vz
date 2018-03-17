import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Api } from '../../../providers/api/api';
// todo: handle dates

import { Solutions } from './solutions.model';

@Injectable()
export class SolutionsService {
    private resourceUrl = Api.API_URL + '/solutions';

    constructor(private http: HttpClient) { }

    create(solutions: Solutions): Observable<Solutions> {
        return this.http.post(this.resourceUrl, solutions);
    }

    update(solutions: Solutions): Observable<Solutions> {
        return this.http.put(this.resourceUrl, solutions);
    }

    find(id: number): Observable<Solutions> {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<any> {
        return this.http.get(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response', responseType: 'text' });
    }
}
