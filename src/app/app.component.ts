import {Component, ViewEncapsulation} from '@angular/core';
import {JWTAuthService} from 'dotcms-js/core/util/jwt-auth.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/primeng/resources/primeng.min.css',
    '../../node_modules/primeng/resources/themes/omega/theme.css'
  ]
})
export class AppComponent {
  title = 'app works!';

  constructor(private jWTAuthService: JWTAuthService) {
    jWTAuthService.login('http://demo37.dotcms.com', 'admin@dotcms.com', 'admin').subscribe(res => {
      console.log('Login Successfully');
    })
  }
}
