import { Component } from '@angular/core';

@Component({
  selector: 'forgot-password-form',
  template: `
    <div class="row">
      <div class="col-md-8 offset-md-2">        
        <form autocomplete="off">
          <div class="form-group">
            <label class="control-label" for="email">Email</label>
            <input id="email" class="form-control" type="email" name="email">
          </div>
          <button type="submit" class="btn btn-lg btn-primary btn-block">Submit</button>
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
export class ForgotPasswordFormComponent {

}
