import { Component } from '@angular/core';
import {JWTAuthService} from "dotcms-js/core/util/jwt-auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private jWTAuthService: JWTAuthService) { }

  handleSubmit(formValue: any) {
    this.jWTAuthService.login('http://demo37.dotcms.com', formValue.username, formValue.password).subscribe(res => {
      this.router.navigate(['/app']);
    });
  }

}
