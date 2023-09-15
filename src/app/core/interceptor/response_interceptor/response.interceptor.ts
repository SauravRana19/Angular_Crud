import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private toaster: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    let msg = ''
     if(request.method !=='GET'){
        this.toaster.success('Message Success!',msg,{
          positionClass:'toast-bottom-right',
          progressBar:true
        });
      } 
    return next.handle(request).pipe(
      tap((res)=>{
        console.log("res",res)

        if(res instanceof HttpResponse){
          console.log("Response",res.body)
         msg = res.statusText
        }
      })
    )
  }
}
