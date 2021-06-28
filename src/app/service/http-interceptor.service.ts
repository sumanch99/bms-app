import { AdminAuthenticationService } from './admin-authentication.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private aut: AdminAuthenticationService) { }
    headerString:string=this.aut.provideHeaderString();
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.aut.logged() && req.url.indexOf('basicauth') === -1) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': this.headerString
                })
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}