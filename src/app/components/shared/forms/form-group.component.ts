import { Component, ContentChild, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'form-group',
  template: `
    <div class="form-group" [ngClass]="{'has-danger': !state.valid && feedback }">

      <label class="control-label">{{label}}</label>
      <ng-content></ng-content>
      
      <div *ngIf="!state.valid && feedback">
        <div *ngIf="state.errors.required" class="form-control-feedback">Required field.</div>
        <div *ngIf="state.errors.minlength" class="form-control-feedback">Has to be at least {{state.errors.minlength.requiredLength}} characters long.</div>
        <div *ngIf="state.errors.maxlength" class="form-control-feedback">Has to be less than {{state.errors.maxlength.requiredLength + 1}} characters long.</div>
        <div *ngIf="state.errors.incorrectMailFormat" class="form-control-feedback">Invalid email address.</div>
      </div>
      
      <!--<pre>{{state.errors | json}}</pre>-->
      
    </div>
  `,
})
export class FormGroupComponent {
  @Input() label: string;
  @Input() feedback = true;
  @ContentChild(FormControlName) state;
}
