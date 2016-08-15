import { Component } from '@angular/core';

@Component({
  selector: 'reset-password-form',
  template: `
    <div class="row">
      <div class="col-md-8 offset-md-2">        
        <form autocomplete="off">
          <div class="form-group">
            <label class="control-label" for="email">Email</label>
            <input id="email" class="form-control" type="email" name="email">
          </div>
          <div class="form-group">
            <label class="control-label" for="password">New Password</label>
            <input id="password" class="form-control" type="password" name="password">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Submit</button>
        </form>
        
        <hr>
        
        <p class="text-center text-muted">
          This link is valid for 24 hours, you can reset your password until then. 
        </p>
      </div>
    </div>
  `,
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent {

}
