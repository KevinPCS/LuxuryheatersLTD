import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-license-agreement',
  templateUrl: './license-agreement.component.html',
  styleUrls: ['./license-agreement.component.css'],
})
export class LicenseAgreementComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<LicenseAgreementComponent>) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
