import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";
@Injectable()
export class AuthGaurd implements CanActivate {
  constructor(private router: Router, private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(this.authService.IsAuthenticated());
    if (this.authService.IsAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['./login']);
    }
  }
}
