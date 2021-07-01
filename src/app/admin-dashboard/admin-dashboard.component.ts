import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  constructor(private location:LocationStrategy,private router:Router) {
    history.pushState(null,window.location.href);
    this.location.onPopState(()=>{
      history.pushState(null,window.location.href);
    });
    this.router.navigate(['viewCustomer']);
   }
  ngOnInit(): void {
  }
  
}
