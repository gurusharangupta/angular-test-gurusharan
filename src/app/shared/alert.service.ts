import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

message:string;
status: string;
  constructor() { }

  setAlert(status: string, message: string){
this.message
  }
}