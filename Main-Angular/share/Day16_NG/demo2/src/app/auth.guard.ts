import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoService } from './common-service/info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let roleId = 1;
    // 1 ===> principle
    // 2 ===> staff 
    // 3 ===> student 
    // 4 ====> admin
    if(roleId ===3) {
      return true;
    } else 
      return false;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot, mySer: InfoService){
    console.log("Hello this is resolver");
    mySer.checkStudData().subscribe((res:any)=>{
      console.log(res);
    })
    return true;
  }

  
}
