import { Component } from '@angular/core';

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
        
        <form autocomplete="off">
          <div class="form-group">
            <label class="control-label" for="email">Email</label>
            <input id="email" class="form-control" type="email" name="email">
          </div>
          <div class="form-group">
            <label class="control-label" for="nick">Nickname</label>
            <input id="nick" class="form-control" type="text" name="nick">
          </div>
          <div class="form-group">
            <label class="control-label" for="password">Password</label>
            <input id="password" class="form-control" type="password" name="password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Signup</button>
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
export class SignupFormComponent {

}
