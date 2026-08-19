import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return typeof localStorage !== "undefined" && localStorage.getItem("login")
    ? true
    : inject(Router).navigate(['/login']);
};
