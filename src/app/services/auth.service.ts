import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from './../models';
import { environment } from '../../environments/environment';
@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<Users>;
    public currentUser: Observable<Users>;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): Users {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http.post<any>(`${environment.ApiUrl}/auth/login`, { username, password })
            .pipe(map(user => {
                document.cookie = 'HRM='+JSON.stringify(user);
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }
    logout() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
