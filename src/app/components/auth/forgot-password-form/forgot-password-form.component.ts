import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidator } from '../../../../utils/validator';

@Component({
  selector: 'forgot-password-form',
  template: `
    <div class="row">
      <div class="col-md-8 offset-md-2">        
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="form-group" [ngClass]="{'has-danger': form.controls.email.dirty && form.controls.email.invalid}">
            <label class="control-label" for="email">Email</label>
            <input formControlName="email" id="email" class="form-control" type="email">
            <div *ngIf="form.controls.email.dirty && form.controls.email.invalid">
              <div *ngIf="form.controls.email.hasError('required')" class="form-control-feedback">Required field.</div>
              <div *ngIf="form.controls.email.hasError('incorrectMailFormat')" class="form-control-feedback">Invalid email address.</div>
            </div>
          </div>
          <button type="submit" [disabled]="form.invalid" class="btn btn-lg btn-primary btn-block">Submit</button>
        </form>
        
        <hr>
        
        <p class="text-center text-muted">
          You will receive an email with further instructions on how to reset your password.
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit, OnDestroy {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, FormValidator.mailFormat]]
    })
  }

  onSubmit() {
    console.log('onSubmit');
  }

  ngOnDestroy() {
    this.form = null;
  }
}
