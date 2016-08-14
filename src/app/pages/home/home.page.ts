/* tslint:disable component-class-suffix */
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `
    <h1>home page</h1>
    
    <div *ngIf="true">asd</div>
  `,
  styleUrls: ['./home.page.scss']
})
export class HomePage {
}
