import { Component } from '@angular/core';

import '../styles/main.scss';

@Component({
  selector: 'nsa-app',
  template: `
    <sidenav-layout #sidenav>
      
      <sidenav></sidenav>
    
      <navbar class="pos-f-t" [sidenav]="sidenav"></navbar>
      
      <div class="main-container container">
        <router-outlet></router-outlet>
      </div>
      
      <ngrx-store-log-monitor *ngIf="IS_DEV" toggleCommand="ctrl-t"></ngrx-store-log-monitor>
      
    </sidenav-layout>

    <ngrx-store-log-monitor *ngIf="IS_DEV" toggleCommand="ctrl-t"></ngrx-store-log-monitor>
  `,
  styles: [require('./app.component.scss')]
})
export class AppComponent {
  IS_DEV = IS_DEV;
}
