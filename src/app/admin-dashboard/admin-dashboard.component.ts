import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  constructor(private location:LocationStrategy) {
    history.pushState(null,window.location.href);
    this.location.onPopState(()=>{
      history.pushState(null,window.location.href);
    });
   }
  ngOnInit(): void {
  }
  
}
