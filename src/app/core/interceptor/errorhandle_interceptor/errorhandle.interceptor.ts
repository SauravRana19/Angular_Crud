import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorhandleInterceptor implements HttpInterceptor {

  constructor( private toaster: ToastrService,) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        this.toaster.error(error.statusText,error.status,{
          progressBar:true
        });
        return throwError(() => new Error(error.statusText));
      })
    )
  }
}
