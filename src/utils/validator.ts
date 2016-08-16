import { Control } from '@angular/common';

export class _Validator {

  static isEmail(control: Control): ValidationResult {

    var EMAIL_REGEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { "incorrectMailFormat": true };
    }

    return null;
  }

}

interface ValidationResult {
  [key: string]: boolean;
}
