import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/model/cutomer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  private baseUrl: string = 'http://bmsapi.herokuapp.com/customer/';

  customerSignUp(customer:Customer){
    return this.http.post(this.baseUrl+'signup',customer);
  }
}