import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SecurerouteGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  private route: Router;
  canActivate():boolean {
   
    //read token from local storage
    let token=localStorage.getItem("token");

    if(token!=undefined)
    {
      return true;
    }
    else
    {
      alert("plz login to continue");
      this.route.navigate(["/login"])
      return false;
    }
  }

  
}
