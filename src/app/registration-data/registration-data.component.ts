import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.css'],
})
export class RegistrationDataComponent implements OnInit {
  formData: any;
  constructor(
    private dialogRef: MatDialogRef<RegistrationDataComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.formData = data.formData;
  }

  ngOnInit(): void {
    console.log(this.formData);
  }
}
