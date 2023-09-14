import { Component, Inject, OnInit, ChangeDetectorRef, ViewChild, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormBuilder } from '@angular/forms';
import { datePickerValidator } from './validations/datepickervalidator';
import { passwordvalidaator } from './validations/passwordvalidaator';
import { regex } from 'src/app/shared/service/RegularExpressions/regex';
import { ApiService } from 'src/app/core/services/apiservice/api.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiservice: ApiService,
    private cdr: ChangeDetectorRef
  ) {
    this.name='suarav'
    this.minDate = new Date(new Date().getFullYear() - 50, 0, 1);
    this.maxDate = new Date(
      new Date().getFullYear() + 0,
      new Date().getMonth(),
      new Date().getDate()
    );
  }
  name:string
  Phide: boolean = true;
  CPhide: boolean = true;
  matchError: boolean = false;
  PermChek: boolean = false;
  minDate: Date;

  maxDate: Date;
  changeBtn: boolean = false;
  loading: boolean = false;

  profileForm = this.fb.group({
    id: ['', []],
    FirstName: ['', [Validators.required, Validators.pattern(regex.name)]],
    LastName: ['', [Validators.required, Validators.pattern(regex.name)]],
    Email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern(regex.email),
      ],
    ],
    Password: [
      '',
      [
        Validators.required,
        Validators.pattern(regex.password),
      ],
    ],
    ConfirmPassword: [
      '',
      [
        Validators.required,
        Validators.pattern(regex.password),
        passwordvalidaator(),
      ],
    ],
    TemporaryAddress: ['', [Validators.required]],
    PermanentAddress: ['', [Validators.required]],
    Postalcode: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(regex.postcode),
      ],
    ],
    City: ['Chandighar', [Validators.required]],

    Gender: ['', [Validators.required]],
    Date: ['', [Validators.required, datePickerValidator()]],
  });

  checkperm() {
    if (this.PermChek == false) {
      this.profileForm.patchValue({
        TemporaryAddress: this.profileForm.value.PermanentAddress,
      });
    } else {
      this.profileForm.patchValue({
        TemporaryAddress: '',
      });
    }
  }

  register() {
    this.loading = true
    if (this.changeBtn == true) {
      this.apiservice
        .updateUser(this.profileForm.value)
        .subscribe((res: any) => {
          if (res) {
            this.loading = false
            this.dialogRef.close();
            return console.log(res);
          }
        });
    } else {
      this.apiservice.addUser(this.profileForm.value).subscribe((res: any) => {
        if (res) {
          this.dialogRef.close();
          return console.log(res);
        }
        return;
      });
    }
  }
  presskey(value: any) {
    if (value.key == 'e' ||value.key == '.') {
      value.preventDefault();
    }
  }
  assignvalue() {
    if (this.data) {
      this.changeBtn = true;
      const { data } = this.data;
      this.profileForm.setValue({
        id: data.id,
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.Email,
        Password: data.Password,
        ConfirmPassword: data.ConfirmPassword,
        PermanentAddress: data.PermanentAddress,
        City: data.City,
        Gender: data.Gender,
        Postalcode: data.Postalcode,
        Date: data.Date,
        TemporaryAddress: data.TemporaryAddress,
      });
    }
  }

  ngOnInit() {
    
    this.assignvalue();
  }
}
