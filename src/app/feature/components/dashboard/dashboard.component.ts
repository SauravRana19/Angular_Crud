import {
  Component,
  Injectable,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { DialogComponent } from './modal/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { constants } from 'src/app/core/utils/const';
// import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StepperComponent } from '../stepper/stepper/stepper.component';
import { ApiService } from 'src/app/core/services/apiservice/api.service';

export interface Users {
  id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  TemporaryAddress: string;
  PermanentAddress: string;
  City: string;
  Gender: string;
  ConfirmPassword: string;
  Postalcode: number;
  Date?: Date;
}
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Dialog: MatDialogRef<DialogComponent> | undefined;
  studentdialog:MatDialogRef<StepperComponent> | undefined;

  constructor(
    private _router: Router,
    public dialogModel: MatDialog,
    private apiservice: ApiService,
    public cdr: ChangeDetectorRef,
    // private _liveAnnouncer: LiveAnnouncer,
  ) {}
  // @ViewChild(MatSort) sort!: MatSort;


  loading: boolean = true;
  searchinput: string = '';
  employee: Users[] = [];

  displayedColumns: string[] = [
    constants.id,
    'FirstName',
    'LastName',
    'Email',
    'Password',
    // 'ConfirmPassword',
    'PermanentAddress',
    'City',
    'Gender',
    'Postalcode',
    'Date',
    'TemporaryAddress',
    'actions',
    'delete',
    // 'disclaimer'
  ];
 

  dataSource = new MatTableDataSource(this.employee);
  
  @ViewChild(MatPaginator) paginator:any= MatPaginator;

  ngAfterViewInit() {
    console.log("paginator",this.paginator)
    this.dataSource.paginator = this.paginator;
  }
  getUsers(): void {
    this.apiservice.getUsers().subscribe((res: any) => {
      this.dataSource.data = res.map((data: any) => {
        this.cdr.detectChanges();
        this.loading = false;
        return data;
      });
      console.log(this.dataSource);
    });
  }

  deletUser(id: number) {
    this.loading = true;
    this.apiservice.deleteUser(id).subscribe((res: any) => {
      this.getUsers();
      this.cdr.detectChanges();
      this.loading = false;
      return console.log(res);
    });
  }
  editUser(data: any) {
    if (data.id) {
      this.Dialog = this.dialogModel.open(DialogComponent, {
        data: { data },
        height: '100%',
        width: '60%',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '200ms',
        disableClose: true,
      });
      this.Dialog.afterClosed().subscribe((result) => {
        this.loading = true;
        this.getUsers();
        this.cdr.detectChanges();
      });
    } else {
      this.Dialog = this.dialogModel.open(DialogComponent, {
        height: '100%',
        width: '60%',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '200ms',
        disableClose: true,
      });
      this.Dialog.afterClosed().subscribe((result) => {
        this.loading = true;
        this.getUsers();
        this.cdr.detectChanges();
      });
    }
  }
  rtoken() {
    localStorage.removeItem('token');
    this._router.navigate(['']);
  }
  applyFilter(event: any) {
    if (event.target.value == '') {
      this.getUsers();
    } else {
      this.apiservice
        .searchUser(this.dataSource.data, event.target.value)
        .subscribe({
          next: (res: any) => {
            this.dataSource.data = res;
            console.log('res', res);
          },
        });
    }
  }
  addstudent(){
    this.studentdialog = this.dialogModel.open(StepperComponent, {
      height: '60%',
      width: '60%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms',
      disableClose: true,
    });
    this.studentdialog.afterClosed().subscribe((result) => {
      // this.loading = true;
      this.getUsers();
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {
    this.getUsers();

  }
}
