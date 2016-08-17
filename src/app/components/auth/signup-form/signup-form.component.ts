import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { _Validator } from '../../../../utils/validator';
import { UserService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-form',
  template: `
    <div class="row">
      <div class="col-md-8 offset-md-2">
        
        <form [formGroup]="form" (submit)="onSubmit()">
        
          <form-group label="Email">
            <input formControlName="email" class="form-control" type="email">
          </form-group>
          
          <form-group label="Username">
            <input formControlName="nick" class="form-control" type="text">
          </form-group>
          
          <form-group label="Password">
            <input formControlName="password" class="form-control" type="text">
          </form-group>
          
          <button type="submit" [disabled]="!form.valid || submitPending" class="btn btn-lg btn-primary btn-block">
            Signup
            <span *ngIf="submitPending"><i class="fa fa-refresh fa-spin fa-fw"></i></span>
          </button>
        </form>
        
        <hr>
        
        <p *ngFor="let alert of alerts">
          <ngb-alert [type]="alert.type" (close)="closeAlert(alert)">{{ alert.message }}</ngb-alert>
        </p>
        
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
  submitPending = false;
  alerts = [];

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['attila.egyed.91@gmail.com', [Validators.required, _Validator.isEmail]],
      nick: ['tsm', [Validators.required, Validators.minLength(3)]],
      password: ['kakas591', [Validators.required, Validators.minLength(3)]]
    })
  }

  onSubmit() {
    const credentials = {
      email: this.form.controls['email'].value,
      username: this.form.controls['nick'].value,
      password: this.form.controls['password'].value
    };

    this.submitPending = true;

    this.userService
      .createUser(credentials)
      .subscribe(
        res => {
          this.submitPending = false;
          // this.alerts.push({type: 'success', message: 'Successful signup!'})
          this.router.navigate(['']);
        },
        err => {
          this.submitPending = false;
          this.alerts.push({type: 'danger', message: err.message})
        }
      )
  }

  closeAlert(alert) {
    const index = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  ngOnDestroy() {
    this.form = null;
  }

}
