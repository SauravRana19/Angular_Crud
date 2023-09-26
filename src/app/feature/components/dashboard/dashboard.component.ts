import {
  Component,
  Injectable,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DialogComponent } from './modal/dialog/dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { constants } from 'src/app/core/utils/const';
// import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StepperComponent } from '../stepper/stepper/stepper.component';
import { ApiService } from 'src/app/core/services/apiservice/api.service';
import { LoaderService } from 'src/app/core/services/loderservice/loader.service';
import { CsvService } from 'src/app/core/services/csvservice/csv.service';
import { PdfService } from 'src/app/core/services/pdfservice/pdf.service';
import { AdminmodalComponent } from './modal/adminmodal/adminmodal.component';

// import { jsPDF } from 'jspdf';
// import autoTable from 'jspdf-autotable'


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
  admindialog:MatDialogRef<AdminmodalComponent> | undefined;


  constructor(
    private _router: Router,
    public dialogModel: MatDialog,
    public apiservice: ApiService,
    public loader:LoaderService,
    public cdr: ChangeDetectorRef,
    private csvservice:CsvService,
    public pdfservice:PdfService,
    // private _liveAnnouncer: LiveAnnouncer,
  ) {}
  // @ViewChild(MatSort) sort!: MatSort;


  // loading = this.apiservice.loader
  // isLoading: Subject<boolean> = this.loader.isLoading;


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
    'downloadcsv',
    'downloadpdf',
    // 'disclaimer'
  ];
 

  dataSource = new MatTableDataSource(this.employee);
  
  @ViewChild(MatPaginator, { static: true }) paginator:any= MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // const elm  = document.createElement('div');
    // console.log("data",this.dataSource.data)
    // console.log("elm",elm)
  }
  getUsers(): void {
    this.apiservice.getUsers();
    this.apiservice.data.subscribe((res)=>{
      this.dataSource.data = res
      // console.log(res)
    })
  }
  addAdmin(data:any){
    console.log(data)
    this.admindialog = this.dialogModel.open(AdminmodalComponent, {
      height: '100%',
      width: '60%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms',
      disableClose: true,
    });
  }

  deletUser(id: number) {
   
    this.apiservice.deleteUser(id).subscribe((res: any) => {
      this.getUsers();
      this.cdr.detectChanges();

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
    
        this.getUsers();
        // this.cdr.detectChanges();
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
   
        this.getUsers();
        // this.cdr.detectChanges();
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
    // this.apiservice.hideloader()
    this.studentdialog = this.dialogModel.open(StepperComponent, {
      height: '60%',
      width: '70',
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
  downloadcsv(data:any){
    // console.log(this.dataSource.data)
    // console.log("data",data)

    // this.pdfservice.pdfconvert(data)
    this.csvservice.downloadFile(data ,'download')   
  }
  downloadpdf(data:any){
    console.log(data)
     this.pdfservice.pdfconvert(data)
  }
  downloadallpdf(data:any){
    this.pdfservice.pdfallconvert(data)
  }


  ngOnInit(): void {
    this.getUsers();
    
  }
}
