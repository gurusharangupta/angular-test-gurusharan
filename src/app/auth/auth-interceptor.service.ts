import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

 constructor(private authService: AuthService){}
 
  intercept(req: HttpRequest<any>, next: HttpHandler){
      console.log('request is on its way');
       let header =  new HttpHeaders({
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token' });
      const modifiedRequest = req.clone({ headers: header})
      return next.handle(modifiedRequest).pipe(
        tap(events => {
          console.log('modified response');
        })
      );
  }
}