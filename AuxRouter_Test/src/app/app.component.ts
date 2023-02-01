import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AuxRouter_Test';

  constructor(private router: Router) {}

  public goToShop(): void {
    this.router.navigate(['/shop']);
  }
}
