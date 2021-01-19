import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  instructions: Observable<string> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.instructions = of(`Ut lobortis risus eget odio hendrerit, a feugiat nisl bibendum. 
                    Maecenas pretium orci ut ligula iaculis fermentum. Sed sodales vel risus eu dictum. 
                    Fusce volutpat, sapien eget pharetra vestibulum.`);
  }

}
