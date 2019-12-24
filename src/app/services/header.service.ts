
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users,UsersInfos } from './../models';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    getProFile() {
        return this.http.get<UsersInfos[]>(`${environment.ApiUrl}/profile/getProfile`);
    }
}
