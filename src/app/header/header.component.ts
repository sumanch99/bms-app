import { AdminAuthenticationService } from './../service/admin-authentication.service';
import { Component, OnInit } from '@angular/core';
import { CustomerAuthenticationService } from '../service/customer/customer-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public aut:AdminAuthenticationService,public custAuth:CustomerAuthenticationService) { }

  ngOnInit(): void {
  }

}
