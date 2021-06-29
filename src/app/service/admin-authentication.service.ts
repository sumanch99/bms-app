
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationService {
  static user:string='';
  static pwd:string='';
  provideHeaderString()
  {
    console.log("It worked");
    console.log("Username:"+AdminAuthenticationService.user+" Password:"+AdminAuthenticationService.pwd);
    let headerString = 'Basic '+btoa(AdminAuthenticationService.user+':'+AdminAuthenticationService.pwd);
    return headerString;
  }
  constructor(private http:HttpClient) { }
  adminAuthenticate(admin:string,password:string){
    AdminAuthenticationService.user=admin;
    AdminAuthenticationService.pwd =password;
    let basicAuthenticationString ='Basic '+btoa(admin+':'+password)
    console.log("basic str- "+basicAuthenticationString);
    let headers = new HttpHeaders(
    {
      Authorization:basicAuthenticationString
    }); 
    console.log(headers);
    return this.http.get<any>('http://localhost:8080/admin/log-in',{headers}).pipe(
      map((data)=>{
        sessionStorage.setItem('adminUserId',admin)
      })
    );
  }
  logged()
  {
    if(sessionStorage.getItem('adminUserId') === AdminAuthenticationService.user)
    return true;
    return false;
  }
  logout()
  {
    sessionStorage.removeItem('adminUserId');
  }
}
