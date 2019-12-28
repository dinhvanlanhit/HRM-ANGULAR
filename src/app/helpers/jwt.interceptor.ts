import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AuthService } from '../services';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const HRM_APP = this.authenticationService.HRM_APP_VALUE;
        const isLoggedIn = HRM_APP && HRM_APP;
        const isApiUrl = request.url.startsWith(environment.ApiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    'Authorization': 'Bearer '+HRM_APP,
                }
            });
        }
        return next.handle(request);
    }
}