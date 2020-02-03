import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import Auth from '@aws-amplify/auth';
import { Observable } from 'rxjs';


/**
 * Prevent access to routes if access-token is not present.
 * 
 * @export
 * @class AuthGuard
 * @implements {CanActivate}
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return Auth.currentAuthenticatedUser().then(() => { return true; })
      .catch(() => {
        this._router.navigate(['/login']);
        return false;
      });

    return true;

  }
}