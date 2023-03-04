import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
// #1
@Injectable()
export class CourseGuardService implements CanActivate{
  // #6
  constructor(private authService:AuthService, private router:Router){}

  // #2
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
  // #7
  if(this.authService.isAuthenticated()){
return true;
  } else{
this.router.navigate(['']); // navigate to root URL
return false; 
  }
  
}
}