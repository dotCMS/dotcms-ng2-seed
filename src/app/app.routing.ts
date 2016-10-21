import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {SiteBrowserComponent} from "./site-browser/site-browser.component";
import {AuthService} from "./auth.service";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: SiteBrowserComponent,
    canActivate: [AuthService]
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
