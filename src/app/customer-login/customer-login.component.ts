import { CustomerAuthenticationService } from './../service/customer/customer-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  customer:string='';
  password:string='';
  errorMessage:boolean=false;
  constructor(public auth:CustomerAuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(customerLogin:any)
  {
    this.customer = customerLogin.value.uid;
    this.password = customerLogin.value.pwd;
    console.log(this.customer);
    console.log(this.password);
    this.auth.customerAuthenticate(this.customer,this.password).subscribe(
      data=>{
        console.log("here");
        console.log(data);
        this.router.navigateByUrl('/customer-dashboard');
      },
      error=>{
        console.log("there");
        console.log(error);
        this.router.navigateByUrl('/customer-login');
        this.errorMessage=true;
      }
    )
  }
}
//far fa-user fa-5x