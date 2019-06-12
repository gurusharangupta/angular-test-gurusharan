import { Component } from '@angular/core';
import { LoggingService } from './shared/logging.service'; 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadPage = 'Recipe';

  constructor(private logging: LoggingService){}

  onPageClick(page: string) {
    this.loadPage = page;
    this.logging.logIt(page);

  }
}
