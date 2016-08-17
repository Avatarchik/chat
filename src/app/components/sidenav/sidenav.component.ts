import { Component, Input } from '@angular/core';
import { UserService, UserState } from '../../services/user.service';
import { Observable } from 'rxjs';
import { SideNavLayoutComponent } from '../sidenav/sidenav-layout.component';

@Component({
  selector: 'sidenav',
  template: `
    <div class="sidenav">
      <div class="list">
        <div class="list-item brand">
          <img class="logo" src="static/images/logo.svg" alt="logo">
          Chat
        </div>
        
        <a [routerLinkActive]="activeCls" [routerLinkActiveOptions]="{exact: true}" routerLink="/" class="list-item">
          <i class="fa fa-fw fa-home"></i>
          Home
        </a>
        
        <a [routerLinkActive]="activeCls" routerLink="/asd" class="list-item">
          <i class="fa fa-fw fa-exclamation"></i>
          404
        </a>
        
        <hr class="divider">
        
        <a *ngIf="(userState | async).loggedIn" [routerLinkActive]="activeCls" (click)="logout($event)" class="list-item">
          <i class="fa fa-fw fa-sign-out"></i>
          Logout
        </a>
        
        <a [routerLinkActive]="activeCls" routerLink="/settings" class="list-item">
          <i class="fa fa-fw fa-cog"></i>
          Settings
        </a>
        
        <a [routerLinkActive]="activeCls" routerLink="/help" class="list-item">
          <i class="fa fa-fw fa-question-circle"></i>
          Help & Feedback
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent {
  @Input() sidenav: SideNavLayoutComponent;
  activeCls = 'active';
  userState: Observable<UserState>;

  constructor(private userService: UserService) {
    this.userState = this.userService.state
  }

  logout(evt: MouseEvent) {
    evt.preventDefault();
    this.userService.logout();
    this.sidenav.close();
  }
}
