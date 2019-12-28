import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from './../models';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class AuthService {
    private HRM_APP_SUBJECT: BehaviorSubject<Users>;
    public  HRM_APP: Observable<Users>;
    constructor(private http: HttpClient) {
        this.HRM_APP_SUBJECT = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('HRM_APP')));
        this.HRM_APP = this.HRM_APP_SUBJECT.asObservable();
    }
    public get HRM_APP_VALUE(): Users {
        return this.HRM_APP_SUBJECT.value;
    }
    login(username, password) {
        return this.http.post<any>(`${environment.ApiUrl}/auth/login`, { username, password })
            .pipe(map(data => {
                localStorage.setItem('HRM_APP', JSON.stringify(data));
                this.HRM_APP_SUBJECT.next(data);
                return data;
            }));
    }
    logout() {
        localStorage.removeItem('HRM_APP');
        localStorage.removeItem('INFO');
        this.HRM_APP_SUBJECT.next(null);
    }
}
