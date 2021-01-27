import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
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
    zipCode: this.formBuilder.control('', Validators.required),
    password1: this.formBuilder.control('', [
      Validators.required,
      this.checkPasswords,
    ]),
    password2: this.formBuilder.control('', [
      Validators.required,
      this.checkPasswords,
    ]),
    serial: this.formBuilder.control('', Validators.required),
  });

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.instructions = of(`Ut lobortis risus eget odio hendrerit, a feugiat nisl bibendum. 
                    Maecenas pretium orci ut ligula iaculis fermentum. Sed sodales vel risus eu dictum. 
                    Fusce volutpat, sapien eget pharetra vestibulum.`);
  }
}
