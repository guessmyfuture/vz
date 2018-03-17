import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Api } from '../../../providers/api/api';
// todo: handle dates

import { Videos } from './videos.model';

@Injectable()
export class VideosService {
    private resourceUrl = Api.API_URL + '/videos';

    constructor(private http: HttpClient) { }

    create(videos: Videos): Observable<Videos> {
        return this.http.post(this.resourceUrl, videos);
    }

    update(videos: Videos): Observable<Videos> {
        return this.http.put(this.resourceUrl, videos);
    }

    find(id: number): Observable<Videos> {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    query(req?: any): Observable<any> {
        return this.http.get(this.resourceUrl);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response', responseType: 'text' });
    }
}
