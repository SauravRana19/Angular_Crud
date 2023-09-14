import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stepper } from './interface/stepper';
import { MatDialogRef } from '@angular/material/dialog';
import { regex } from 'src/app/shared/service/RegularExpressions/regex';
import { datePickerValidator } from '../../dashboard/modal/dialog/validations/datepickervalidator';
import { ApiService } from 'src/app/core/services/apiservice/api.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  
  constructor( private fb: FormBuilder, public dialogRef: MatDialogRef<StepperComponent>, private apiservice: ApiService, public cdr: ChangeDetectorRef
  ) {

  }
  isLinear = false;

  studentform = this.fb.group({

    userinfo: this.fb.group({
      FirstName: ['', [Validators.required, Validators.pattern(regex.name)]],
      LastName: ['', [Validators.required, Validators.pattern(regex.name)]],
      Gender: ['', [Validators.required]],
      Date: ['', [Validators.required, datePickerValidator()]],
    }),

    basicinfo: this.fb.group({
      Email: ['', [Validators.required,Validators.email,Validators.pattern(regex.email)]],
      Password: ['',[ Validators.required,Validators.pattern(regex.password),],],
    }),
    
    address: this.fb.group({
    TemporaryAddress: ['', [Validators.required]],
    PermanentAddress: ['', [Validators.required]],
    City: ['', [Validators.required]],
    Postalcode: [ '', [Validators.required,  Validators.minLength(5),  Validators.pattern(regex.postcode),],],
})
  })
  studentdata:stepper[] = []

  ngOnInit(): void {

  }
  submitForm(){
    // console.log("data",this.studentform.value);
    const data:any = this.studentform.value
    let studentdata = {}
    for (const key in data ) 
      studentdata = {...studentdata,...data[key]}
   
      console.log("studentdata.....",studentdata)

        // this.studentdata = {
        // FirstName: this.studentform.value.userinfo?.FirstName,
        // LastName: this.studentform.value.userinfo?.LastName,
        // Date: this.studentform.value.userinfo?.Date,
        // Gender: this.studentform.value.userinfo?.Gender,
        // Email: this.studentform.value.basicinfo?.Email,
        // Password: this.studentform.value.basicinfo?.Password,
        // ConfirmPassword: this.studentform.value.basicinfo?.Password,
        // TemporaryAddress: this.studentform.value.address?.TemporaryAddress,
        // PermanentAddress: this.studentform.value.address?.PermanentAddress,
        // City: this.studentform.value.address?.City,
        // Postalcode: this.studentform.value.address?.Postalcode,
        // }
        
        // console.log("studentdata",this.studentdata)

    this.apiservice.addUser(studentdata).subscribe((res: any) => {
      if (res) {
        this.dialogRef.close()
        this.cdr.detectChanges();
        return console.log(res);
      }
      return;
    });
  }
}
