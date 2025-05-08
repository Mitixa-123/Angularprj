import { Conditional } from '@angular/compiler';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from '@angular/router';
import { Observable } from 'rxjs';





// import { session } from '../Utils/Session';
 

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // making Conditional
      const router :Router = Inject(Router);
      const ProtectedRouter:string[] = ['/notes']
      // return ProtectedRouter.includes(state.url) && !session ?
      // router.navigate(['/']):true;
    return false
  }

  
}
