import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  checkbox: boolean = true;
  token: string = '';
  inputvalue: string = '';
  Phide: boolean = true;

  valuecheck(event: any) {
    if (event.target.value !== '') {
      this.inputvalue = '';
      // console.log('value.target', event.target.value);
      if (event.type == 'click') {
        // console.log('click event', event);
        if (event.target.value == '') {
          this.inputvalue = '';
        } else {
          this.inputvalue = 'Required';
        }
      }
    } else if (event.type == 'keypress') {
      this.inputvalue = '';
    }
  }
  // event.target.value!= " " ? this.inputvalue = '' : event.target.value ==" " ?  this.inputvalue = '' :  this.inputvalue = '';

  login(item: any) {
    if (!item) return;
    else {
      this.token =
        Math.random().toString(36).substring(2) +
        Math.random().toString(36).substring(2);
      localStorage.setItem('token', this.token);
      this._router.navigate(['feature']);
    }
  }

  constructor(private _router: Router) {}

  ngOnInit(): void {}
}
