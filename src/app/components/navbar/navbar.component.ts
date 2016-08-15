import { Component, Input } from '@angular/core';
import { SideNavLayoutComponent } from '../sidenav/sidenav-layout.component';

@Component({
  selector: 'navbar',
  template: `
    <nav class="navbar navbar-dark navbar-fixed-top">
      <ul class="nav navbar-nav pull-left">
        <li class="nav-item">
          <a href="#" class="navbar-toggler" (click)="sidenav.toggle($event)"><i class="fa fa-bars"></i></a>
        </li>
        <li class="nav-item hidden-sm-down">
          <a routerLink="/" class="brand">Chat</a>
        </li>
      </ul>
      <!-- IF LOGGED OUT -->
      <ul class="nav navbar-nav pull-right">
        <li class="nav-item">
          <a routerLink="auth/login"><i class="fa fa-sign-in"></i></a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() sidenav: SideNavLayoutComponent;
}
