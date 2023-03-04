import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
// #1
@Injectable()
export class CourseGuardService implements CanActivate, CanActivateChild{
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
canActivateChild(childRoute:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean {
return this.canActivate(childRoute,state)
}

}

// Our requirement is the course details page should only be accessible to the authorized users and if you notice this has id for the particular course 
// so here we have the parent route(courses) we are specifying this child route

// Since we are implementing the interface this interface is defining a can activate child method which need to be implemeted inside this service class because this service class is implementing this interface

// The signature of this method is same as the signature of canActivate method  