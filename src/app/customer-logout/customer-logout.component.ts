import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerAuthenticationService } from '../service/customer/customer-authentication.service';

@Component({
  selector: 'app-customer-logout',
  templateUrl: './customer-logout.component.html',
  styleUrls: ['./customer-logout.component.css']
})
export class CustomerLogoutComponent implements OnInit {
  constructor(private aut:CustomerAuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.aut.logout();
    this.router.navigate(['customer-login']);
  }

}
