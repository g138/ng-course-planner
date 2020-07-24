import {Directive, Input} from "@angular/core";
import {FormGroup, NG_VALIDATORS, Validators} from "@angular/forms";
import {ValidationError} from "@ngx-pwa/local-storage";

@Directive({
  selector: 'mustMatch',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatch, multi: true }]
})
export class MustMatch implements Validators{
  @Input() mustMatch: string[] = [];

  MustMatchPass(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      // return null if controls haven't initialised yet
      if (!control || !matchingControl) {
        return null;
      }

      // return null if another validator has already found an error on the matchingControl
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return null;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  validate(formGroup: FormGroup): ValidationError {
    return this.MustMatchPass(this.mustMatch[0], this.mustMatch[1])(formGroup);
  }
}
