import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoService } from './common-service/info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private mySer1: InfoService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let roleId = 1;
    // 1 ===> principle
    // 2 ===> staff 
    // 3 ===> student 
    // 4 ====> admin
    if(roleId === 1) {
      return true;
    } else 
      return false;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("Hello this is resolver");
    console.log(this.mySer1.checkStudData());
    this.mySer1.checkStudData().subscribe((res:any)=>{
      console.log(res);
      return true;
    })
    
  }

  
}
