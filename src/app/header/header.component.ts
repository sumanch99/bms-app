import { AdminAuthenticationService } from './../service/admin-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = false;
  constructor(public aut:AdminAuthenticationService) { }

  ngOnInit(): void {
  }

}