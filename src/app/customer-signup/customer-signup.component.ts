import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { Customer } from '../model/cutomer.model';
import { CustomerService } from '../service/customer/customer.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {

  constructor(private customerService: CustomerService,private router:Router) { }
  customer: Customer = new Customer();
  
  ngOnInit(): void {
  }

  onSubmit() {
    
    this.customerService.customerSignUp(this.customer).subscribe(
      response => {
        console.log(response);
        const jsonRes=JSON.stringify(response);
        const res  = JSON.parse(jsonRes);
        swal("Congratulations!", res.message, "success");
        this.router.navigate(['customer-login']);
      },
      error=>{
        console.log(error);
        const jsonRes=JSON.stringify(error);
        const res  = JSON.parse(jsonRes);
        swal("Failed!!", "Make sure that you have an account in our bank", "error");
      }
    );
  }

}