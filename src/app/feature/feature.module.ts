import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dashboard/modal/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { SearchPipe } from './components/pipe/search/search.pipe';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CartsComponent } from './components/carts/carts.component';
import { HighlighterPipe } from './components/pipe/highlighter/highlighter.pipe';
import { CartsdetailsComponent } from './components/carts/components/cartsdetails/cartsdetails.component';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperComponent } from './components/stepper/stepper/stepper.component';
import { AddressComponent } from './components/stepper/stepper/stepperforms/address/address.component';
import { UserinfoComponent } from './components/stepper/stepper/stepperforms/userinfo/userinfo.component';
import { BasicinfoComponent } from './components/stepper/stepper/stepperforms/basicinfo/basicinfo.component';
import { ApiService } from '../core/services/apiservice/api.service';

@NgModule({
  declarations: [
    DashboardComponent,
    DialogComponent,
    SearchPipe,
    CartsComponent,
    HighlighterPipe,
    CartsdetailsComponent,
    StepperComponent,
    AddressComponent,
    UserinfoComponent,
    BasicinfoComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatStepperModule,
  ],
  providers: [ApiService],
})
export class FeatureModule {}
