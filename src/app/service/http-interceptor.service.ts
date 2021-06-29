import { AdminAuthenticationService } from './admin-authentication.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private aut: AdminAuthenticationService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let headerString=this.aut.provideHeaderString();
        console.log("Header String:"+headerString)
        if (this.aut.logged() && req.url.indexOf('basicauth') === -1) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization':headerString
                })
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}