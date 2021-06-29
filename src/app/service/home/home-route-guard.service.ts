import { WelcomeComponent } from './../../welcome/welcome.component';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeRouteGuardService implements CanActivate {

  constructor(private router:Router,private welcome:WelcomeComponent ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if(this.welcome.getWelcome()===true)
    return true;
    this.router.navigate(['welcome']);
    return false;
  } 
}
