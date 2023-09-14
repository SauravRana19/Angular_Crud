import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import { RedirectGuard } from '../core/guard/redirectguard/redirect.guard';

const routes: Routes = [
   { path: '',
    component: LoginComponent,
    canActivate:[RedirectGuard] 
  }  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
