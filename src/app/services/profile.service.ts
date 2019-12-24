
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersInfos } from './../models';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ProfileService {
    constructor(private http: HttpClient) { }
    getProFile() {
        return this.http.get<UsersInfos[]>(`${environment.ApiUrl}/profile/getProfile`);
    }
    postUpdateUserInfo(UsersInfos){
        return this.http.post<any[]>(`${environment.ApiUrl}/profile/postUpdateProfile`,UsersInfos).pipe(map(data => {
                return data;
        }));
    }
    postChangeAvatar(file: File){
        let formData = new FormData();
         formData.append("file", file);
        
        return this.http.post(`${environment.ApiUrl}/profile/postChangeAvatar`,formData).pipe(map(data => {
            return data;
        }));
    }
}

	