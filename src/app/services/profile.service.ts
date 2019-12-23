
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersInfos } from './../models';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class UserIfosService {
    constructor(private http: HttpClient) { }
    getInfoUser() {
        return this.http.get<UsersInfos[]>(`${environment.ApiUrl}/getUserInfo`);
    }
}
