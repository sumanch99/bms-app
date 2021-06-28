
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AdminAuthenticationService } from './admin-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate {

  constructor(private router:Router ,private authenticate: AdminAuthenticationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.authenticate.logged()===true)
    return true;
    this.router.navigate(['app-admin-login']);
    return false;
  } 
} 
