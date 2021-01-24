import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { RegistrationDataService } from './registration-data.service';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  instructions: Observable<string> | undefined;
  registrationForm: FormGroup | undefined;
  licenseAgreement: Observable<string> | undefined;

  constructor(
    private registrationDataService: RegistrationDataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.instructions = of(`Ut lobortis risus eget odio hendrerit, a feugiat nisl bibendum. 
                    Maecenas pretium orci ut ligula iaculis fermentum. Sed sodales vel risus eu dictum. 
                    Fusce volutpat, sapien eget pharetra vestibulum.`);

    this.registrationForm = this.formBuilder.group({
      name: this.formBuilder.control(
        this.registrationDataService.registrationData.name,
        Validators.required
      ),
      email: this.formBuilder.control(
        this.registrationDataService.registrationData.email,
        Validators.required
      ),
      street: this.formBuilder.control(
        this.registrationDataService.registrationData.street,
        Validators.required
      ),
      zipCode: this.formBuilder.control(
        this.registrationDataService.registrationData.zipCode,
        Validators.required
      ),
      password: this.formBuilder.control(
        this.registrationDataService.registrationData.password,
        Validators.required
      ),
      serial: this.formBuilder.control(
        this.registrationDataService.registrationData.serial,
        Validators.required
      ),
    });
  }
}
