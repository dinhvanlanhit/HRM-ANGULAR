
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders, } from '@angular/common/http';

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
    postChangeAvatar(FILE){
        const formData  = new FormData();
        formData.append('FILE',FILE,FILE.name);
        const HttpUploadOptions = {
            headers: new HttpHeaders({ 
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
             })
        }
        return this.http.post(`${environment.ApiUrl}/profile/postChangeAvatar`,
        formData,
        // HttpUploadOptions
        ).pipe(map(data => {
            console.log(data);
            return data;
        }));
    }
}

	