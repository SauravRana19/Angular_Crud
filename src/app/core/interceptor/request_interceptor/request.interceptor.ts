import { Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, delay, finalize } from 'rxjs';
import { ApiService } from '../../services/apiservice/api.service';
import { LoaderService } from '../../services/loderservice/loader.service';
// import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private apiservice: ApiService,public loader:LoaderService,
    // private toaster: ToastrService,
    ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("request",request)
    // if(request.method !=='GET'){
    //   this.toaster.success('Message Success!', 'Title Success!');
    // }
    this.loader.show();

    return next.handle(request).pipe(
      delay(1000),
      finalize(()=> this.loader.hide())
    );
  }
}
