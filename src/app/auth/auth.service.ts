import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface AuthResponseData{
  kind:string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
@Injectable()
export class AuthService {

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

    })
  }
}