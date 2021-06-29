import { CustomerAuthenticationService } from './customer-authentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerRouteGuardService implements CanActivate {

  constructor(private router:Router ,private authenticate: CustomerAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.authenticate.logged()===true)
    return true;
    this.router.navigate(['customer-login']);
    return false;
  } 
} 