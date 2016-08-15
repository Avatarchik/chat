import { Component } from '@angular/core';

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
        
        <!-- IF LOGGED IN -->
        <a [routerLinkActive]="activeCls" routerLink="/auth/logout" class="list-item">
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
  activeCls = 'active';
}
