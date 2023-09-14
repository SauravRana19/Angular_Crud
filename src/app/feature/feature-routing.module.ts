import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './components/dashboard/dashboard.component'
import { CartsComponent } from './components/carts/carts.component';
import { CartsdetailsComponent } from './components/carts/components/cartsdetails/cartsdetails.component';
import { AuthGuard } from '../core/guard/authguard/auth.guard';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'carts', component: CartsComponent,
    canActivate:[AuthGuard]
  }, 
  {
    path: 'detail/:id', component: CartsdetailsComponent ,
    canActivate:[AuthGuard]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
