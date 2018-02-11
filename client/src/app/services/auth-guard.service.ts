import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService {

  constructor(private router: Router, private auth: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.auth.isLoggedIn());
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
