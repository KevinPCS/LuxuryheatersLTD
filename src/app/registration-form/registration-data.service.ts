import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegistrationDataService {
  registrationData: {
    name: string;
    email: string;
    street: string;
    zipCode: number;
    password: string;
    serial: string;
  };

  constructor() {
    this.registrationData = {
      name: '',
      email: '',
      street: '',
      zipCode: 0,
      password: '',
      serial: '',
    };
  }
}
