import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {SettingsStorageService} from "dotcms-js/dotcms-js";
import {DotSettings} from "dotcms-js/dotcms-js";


@Injectable()
export class AuthService implements CanActivate {
  constructor(private router: Router, private settingsStorageService: SettingsStorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isRouteAllow(state.url);
  }

  public isRouteAllow(url: string): boolean {
    let auth: DotSettings = this.settingsStorageService.getSettings();
    if (auth && auth.jwt) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
