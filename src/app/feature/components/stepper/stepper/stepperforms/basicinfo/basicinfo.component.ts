import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ControlContainer, Validators} from '@angular/forms';
import { regex } from 'src/app/shared/service/RegularExpressions/regex';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.scss']
})
export class BasicinfoComponent implements OnInit {
  // form!: FormGroup;
  @Input('form') parentform:any 
  basicinfo!: FormGroup;

  constructor(private fb: FormBuilder,
    private controlContainer:ControlContainer) { 

   
  }
  register(){
    
  }
  ngOnInit(): void {
    this.basicinfo=<FormGroup>this.controlContainer.control;
    // this.parentform = this.fb.group({
    //   Email: ['', [Validators.required,Validators.email,Validators.pattern(regex.email)]],
    //   Password: ['',[ Validators.required,Validators.pattern(regex.password),],],
    // })
  }

}
