import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { tap } from 'rxjs/operators';


export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler){
      console.log('request is on its way');
      const modifiedRequest = req.clone({ headers: req.headers.append('Auth','xyz')})
      return next.handle(modifiedRequest).pipe(
        tap(events => {
          console.log('modified response');
        })
      );
  }
}