
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './../models';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    getInfoUser() {
        return this.http.get<Users[]>(`${environment.ApiUrl}/getUserInfo`);
    }
}
