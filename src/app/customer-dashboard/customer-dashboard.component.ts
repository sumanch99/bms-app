import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private location:LocationStrategy,private router:Router) {
    history.pushState(null,window.location.href);
    this.location.onPopState(()=>{
      history.pushState(null,window.location.href);
    });
    this.router.navigate(['customer-check-balance']);
   }


  ngOnInit(): void {
  }

}
