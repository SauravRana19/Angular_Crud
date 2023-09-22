import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MyErrorStateMatcher } from 'src/app/core/utils/errormatch';
import { regex } from 'src/app/shared/service/RegularExpressions/regex';

@Component({
  selector: 'app-adminmodal',
  templateUrl: './adminmodal.component.html',
  styleUrls: ['./adminmodal.component.scss']
})
export class AdminmodalComponent implements OnInit {

  
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AdminmodalComponent>,) { }
    matcher = new MyErrorStateMatcher ();
    Phide: boolean = true;
    
    adminform!:FormGroup;


  ngOnInit(): void {
    this.adminform = this.fb.group({
      name:['', [Validators.required, Validators.pattern(regex.name)]],
      email:['',[  Validators.required, Validators.email, Validators.pattern(regex.email),],],
      password:['',[Validators.required,Validators.pattern(regex.password),],],

      address: this.fb.array([],[Validators.required])
   
    })
    this.createItem() 
  }
  register(){

  }
   address():FormArray {
   return this.adminform.get('address') as FormArray
  }
  address_controls(){
    return this.fb.group({
      city:['',[Validators.required]]
    })
  }

  createItem() {
   this.address().push(this.address_controls())
  }

  addItem() {
    const phone = this.fb.group({
      city: ['', [Validators.required]],
    })
    // this.address.push(phone);
  }

}
