import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Api } from '../../../providers/api/api';
// todo: handle dates

import { Problems } from './problems.model';

@Injectable()
export class ProblemsService {
    private resourceUrl = Api.API_URL + '/problems';

    constructor(private http: HttpClient) { }

    create(problems: Problems): Observable<Problems> {
        return this.http.post(this.resourceUrl, problems);
    }

    update(problems: Problems): Observable<Problems> {
        return this.http.put(this.resourceUrl, problems);
    }

    find(id: number): Observable<Problems> {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<any> {
        return this.http.get(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response', responseType: 'text' });
    }
}
