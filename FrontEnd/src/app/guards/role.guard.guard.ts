import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {RoleEnum} from '../enum/role.enum'

import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private userService: UserService,private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {

      const user = this.userService.getConnectedUser();
    if (user && user.role === RoleEnum.JOURNALIST){
      return true;
    }else{
      this.router.navigateByUrl('/user/home')
      return false;
    }
    
  }
  
}

  

