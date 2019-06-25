import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthService {
  user = new Subject<User>();

constructor(private http: HttpClient) { }

signUp(email: string, password: string) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Content-Type': 'application/json'

    })
  };
  return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBUhRZwz4CVDoBjYfw-ldzCILvu1rn-PDI',
    {
      email: email,
      password: password,
      returnSecureToken: true

    }).pipe(catchError(this.handleError));
}

login(email: string, password: string) {
  return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBUhRZwz4CVDoBjYfw-ldzCILvu1rn-PDI',
    {
      email: email,
      password: password,
      returnSecureToken: true

    }).pipe(catchError(this.handleError));

}

  private handleError(errorRes: HttpErrorResponse) {

  let errorMessage = 'An unknown error has occured';
  console.log(errorRes.error.error.message);
  if (!errorRes.error || !errorRes.error.error) return throwError(errorMessage);
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'This email exists already';
      break;

    case 'EMAIL_NOT_FOUND':
      errorMessage = 'This email is not registered';
      break;

    case 'INVALID_PASSWORD':
      errorMessage = 'This email and password do not match';
      break;
  }
  return throwError(errorMessage);
}
}
