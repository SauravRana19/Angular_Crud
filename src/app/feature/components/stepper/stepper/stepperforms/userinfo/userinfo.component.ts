import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ControlContainer,
  // Validators,
} from '@angular/forms';
// import { datePickerValidator } from 'src/app/feature/components/dashboard/modal/dialog/validations/datepickervalidator';
// import { regex } from 'src/app/shared/service/RegularExpressions/regex';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {
  @Input('form') parentform: any;
  userinfo!: FormGroup;

  minDate: Date;
  maxDate: Date;

  constructor(
    private fb: FormBuilder,
    private controlContainer: ControlContainer
  ) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 30, 0, 1);
    this.maxDate = new Date(
      new Date().getFullYear() + 0,
      new Date().getMonth(),
      new Date().getDate()
    );
  }

  register() {}

  ngOnInit(): void {
    this.userinfo = <FormGroup>this.controlContainer.control;

    // console.log('parentform', this.userinfo);
    // this.parentform = this.fb.group({
    //   FirstName: ['', [Validators.required, Validators.pattern(regex.name)]],
    //   LastName: ['', [Validators.required, Validators.pattern(regex.name)]],
    //   Gender: ['', [Validators.required]],
    //   Date: ['', [Validators.required, datePickerValidator()]],
    // });
  }
}
