import { Injectable } from '@angular/core';


export class LoggingService {

  constructor() { }

  logIt(page) {
    console.log(page + " is clicked");
  }
}