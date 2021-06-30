import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private location:LocationStrategy) {
    history.pushState(null,window.location.href);
    this.location.onPopState(()=>{
      history.pushState(null,window.location.href);
    });
   }


  ngOnInit(): void {
  }

}
