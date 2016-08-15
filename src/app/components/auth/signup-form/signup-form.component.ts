import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidator } from '../../../../utils/validator';

@Component({
  selector: 'signup-form',
  template: `
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <!--
        <a href="/auth/facebook" class="btn btn-lg btn-primary btn-block">
          <i class="fa fa-facebook-square"></i>
          Login with Facebook
        </a>
        
        <hr>
        
        <a href="/auth/google" class="btn btn-lg btn-primary btn-block">
          <i class="fa fa-google-plus"></i>
          Login with Google
        </a>
        
        <hr>
        -->
        
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
          <div class="form-group" [ngClass]="{'has-danger': form.controls.email.dirty && form.controls.email.invalid}">
            <label class="control-label" for="email">Email</label>
            <input formControlName="email" id="email" class="form-control" type="email">
            <div *ngIf="form.controls.email.dirty && form.controls.email.invalid">
              <div *ngIf="form.controls.email.hasError('required')" class="form-control-feedback">Required field.</div>
              <div *ngIf="form.controls.email.hasError('incorrectMailFormat')" class="form-control-feedback">Invalid email address.</div>
            </div>
          </div>
          
          <div class="form-group" [ngClass]="{'has-danger': form.controls.nick.dirty && form.controls.nick.invalid}">
            <label class="control-label" for="nick">Nickname</label>
            <input formControlName="nick" id="nick" class="form-control" type="text">
            <div *ngIf="form.controls.nick.dirty && form.controls.nick.invalid">
              <div *ngIf="form.controls.nick.hasError('required')" class="form-control-feedback">Required field.</div>
              <div *ngIf="form.controls.nick.hasError('minlength')" class="form-control-feedback">Has to be at least {{form.controls.nick.errors.minlength.requiredLength}} characters long.</div>
            </div>
          </div>
          
          <div class="form-group" [ngClass]="{'has-danger': form.controls.password.dirty && form.controls.password.invalid}">
            <label class="control-label" for="password">Password</label>
            <input formControlName="password" id="password" class="form-control" type="password">
            <div *ngIf="form.controls.password.dirty && form.controls.nick.invalid">
              <div *ngIf="form.controls.password.hasError('required')" class="form-control-feedback">Required field.</div>
              <div *ngIf="form.controls.password.hasError('minlength')" class="form-control-feedback">Has to be at least {{form.controls.password.errors.minlength.requiredLength}} characters long.</div>
            </div>
          </div>
          
          <button type="submit" [disabled]="form.invalid" class="btn btn-lg btn-primary btn-block">Signup</button>
        </form>
        
        <hr>
        
        <ul class="list-inline text-center">
          <li>
            <small><a routerLink="/auth/forgot-password">Forgot your password?</a></small>
          </li>
          <li>
            <small><a routerLink="/auth/login">Already a member?</a></small>
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit, OnDestroy {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, FormValidator.mailFormat]],
      nick: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onSubmit() {
    console.log('onSubmit');
  }

  ngOnDestroy() {
    this.form = null;
  }

}
