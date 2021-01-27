import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  //  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogModule,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { LicenseAgreementComponent } from '../license-agreement/license-agreement.component';
import { RegistrationDataComponent } from '../registration-data/registration-data.component';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  instructions: Observable<string>;
  licenseAgreement: Observable<string>;

  registrationForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.email,
    ]),
    city: this.formBuilder.control('', Validators.required),
    street: this.formBuilder.control('', Validators.required),
    zipCode: this.formBuilder.control(Validators.required),
    password1: this.formBuilder.control('', [
      Validators.required,
      this.checkPasswords,
    ]),
    password2: this.formBuilder.control('', [
      Validators.required,
      this.checkPasswords,
    ]),

    serial: this.formBuilder.control('', Validators.required),

    checkbox: this.formBuilder.control(false, Validators.requiredTrue),
  });

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.instructions = of(`Ut lobortis risus eget odio hendrerit, a feugiat nisl bibendum. 
                    Maecenas pretium orci ut ligula iaculis fermentum. Sed sodales vel risus eu dictum. 
                    Fusce volutpat, sapien eget pharetra vestibulum.`);
  }

  checkPasswords(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const passwordMatches =
        this.registrationForm.get('password1').value ===
        this.registrationForm.get('password2').value;
      return passwordMatches
        ? null
        : { passwordMatches: { value: control.value } };
    };
  }

  openSubmitDialog(): void {
    this.dialog.open(RegistrationDataComponent, {
      data: { formData: this.registrationForm.value },
    });
  }

  openLicenseAgreementDialog(): void {
    /*  const dialogConfig = new MatDialogConfig(); */
    this.dialog.open(LicenseAgreementComponent);
  }

  /*Password Check (WIP)

  checkPasswords() {
    if (this.registrationForm.hasError('passwordMismatch'))
      this.password2.setErrors([{ passwordMismatch: true }]);
    else this.password2.setErrors(null);
  }

  passwordMatchValidator: ValidatorFn = (
    formGroup: FormGroup
  ): ValidationErrors | null => {
    if (formGroup.get('password1').value === formGroup.get('password2').value)
      return null;
    else return { passwordMismatch: true };
  };
 */
}
