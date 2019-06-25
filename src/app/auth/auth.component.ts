import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { AlertService, AuthResponseData } from '../shared/alert.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = false;
  isLoading = false;
  constructor(private authService: AuthService, private alertService: AlertService) { }

  ngOnInit() {
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      return;
    }
    this.isLoading = true
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
    authObs =  this.authService.login(email, password);
    } else {
    authObs =  this.authService.signUp(email, password);
    }

    authObs.subscribe(
      resData => {
        this.isLoading = false;
        console.log(resData);
      },
      errorMessage => {
        this.alertService.setAlert('Error', errorMessage);
        this.isLoading = false;

      }
    );

    form.reset();
  }

}