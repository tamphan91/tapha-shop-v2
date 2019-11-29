import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
  // constructor(private nbAuthService: NbAuthService) {
  //   this.nbAuthService.isAuthenticated().subscribe(isAuth => {
  //     if (isAuth) {
  //       this.menu = MENU_ITEMS;
  //       this.menu[this.menu.length - 1].children = this.menu[this.menu.length - 1].children.filter(children => children.title !== 'Login')
  //     } else {
  //       this.menu = MENU_ITEMS;
  //     }
  //   })
  // }
}
