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

  constructor() {
  }
}
