import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthenticationService {

  static user:string='';
  static pwd:string='';
  provideHeaderString()
  {
    let headerString = 'Basic '+btoa(CustomerAuthenticationService.user+':'+CustomerAuthenticationService.pwd);
    return headerString;
  }
  constructor(private http:HttpClient) { }
  customerAuthenticate(customer:string,password:string){
    CustomerAuthenticationService.user=customer;
    CustomerAuthenticationService.pwd =password;
    let basicAuthenticationString ='Basic '+btoa(customer+':'+password)
    console.log("basic str- "+basicAuthenticationString);
    let headers = new HttpHeaders(
    {
      Authorization:basicAuthenticationString
    }); 
    console.log(headers);
    return this.http.get<any>('http://localhost:8080/customer/log-in',{headers}).pipe(
      map((data)=>{
        if(data.status===200)
          sessionStorage.setItem('customerUserId',customer)
      })
    );
  }
  logged()
  {
    if(sessionStorage.getItem('customerUserId') === CustomerAuthenticationService.user)
    return true;
    return false;
  }
  logout()
  {
    console.log("logout()");
    sessionStorage.removeItem('customerUserId');
    this.http.get<any>('http://localhost:8080/log-out').subscribe((res)=>{
    console.log("done");  
    console.log(res);
    },
    (error)=>{
      console.log("Error");
      console.log(error);
    });
  }
}

