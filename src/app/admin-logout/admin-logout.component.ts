import { AdminAuthenticationService } from './../service/admin-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-logout',
  templateUrl: './admin-logout.component.html',
  styleUrls: ['./admin-logout.component.css']
})
export class AdminLogoutComponent implements OnInit {

  constructor(private aut:AdminAuthenticationService,private router:Router) { }

  ngOnInit(): void {
    this.aut.logout();
    this.router.navigateByUrl('/app-admin-login');
  }

}
