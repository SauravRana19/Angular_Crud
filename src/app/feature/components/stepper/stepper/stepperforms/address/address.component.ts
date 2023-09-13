import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ControlContainer, Validators } from '@angular/forms';
import { regex } from 'src/app/shared/service/RegularExpressions/regex';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  // form!: FormGroup;
  @Input('form') parentform:any 
  address!: FormGroup;
  constructor(private fb: FormBuilder,
    private controlContainer:ControlContainer) {

  }
  register() {}
  presskey(value: any) {
    if (value.key == 'e' || value.key == '.') {
      value.preventDefault();
    }
  }
  ngOnInit(): void {
    this.address=<FormGroup>this.controlContainer.control;
  //   this.parentform = this.fb.group({
  //     TemporaryAddress: ['', [Validators.required]],
  //     PermanentAddress: ['', [Validators.required]],
  //     City: ['', [Validators.required]],
  //     Postalcode: [ '', [Validators.required,  Validators.minLength(5),  Validators.pattern(regex.postcode),],],
  // });
  }
  save(){
    // console.log(this.parentform)
  }
}
