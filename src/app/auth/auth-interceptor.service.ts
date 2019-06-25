import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

 constructor(private authService: AuthService){}
 
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let token = null;
    this.authService.user.pipe(take(1),
    exhaustMap(user => {
      console.log('aa raha hai');
      if(!user){
        return next.handle(req);
      }
   
      const modifiedRequest = req.clone({ params: new HttpParams().set('auth', user.token)});
      
      return next.handle(modifiedRequest);
    })
    );
  }
}