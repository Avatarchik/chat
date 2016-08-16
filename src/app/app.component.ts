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
    </sidenav-layout>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
