import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  signForm(email: string, password: string) {
    this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBUhRZwz4CVDoBjYfw-ldzCILvu1rn-PDI',
    {
      email: email,
      password: password,
      
    })
  }
}