import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Api } from '../../../providers/api/api';
// todo: handle dates

import { Images } from './images.model';

@Injectable()
export class ImagesService {
    private resourceUrl = Api.API_URL + '/images';

    constructor(private http: HttpClient) { }

    create(images: Images): Observable<Images> {
        return this.http.post(this.resourceUrl, images);
    }

    update(images: Images): Observable<Images> {
        return this.http.put(this.resourceUrl, images);
    }

    find(id: number): Observable<Images> {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<any> {
        return this.http.get(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response', responseType: 'text' });
    }
}
