import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadPage = 'Recipe';

  onPageClick(page: string) {
    this.loadPage = page;
  }
}
