import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { stepper } from './interface/stepper';
import { ApiService } from '../../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { regex } from 'src/app/shared/service/RegularExpressions/regex';
import { datePickerValidator } from '../../dashboard/modal/dialog/validations/datepickervalidator';

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


  ngOnInit(): void {

  }

  submitForm(){
    console.log("data",this.studentform.value);
    // this.apiservice.addUser(this.studentdata).subscribe((res: any) => {
    //   if (res) {
    //     this.dialogRef.close()
    //     this.cdr.detectChanges();
    //     return console.log(res);
    //   }
    //   return;
    // });
  }
}