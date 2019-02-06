import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tapCounter = 0;

  buttonTappedIncrease(): void {
    this.tapCounter++;
  }

  buttonTappedDecrease(): void {
    this.tapCounter--;
  }

  reset(): void {
    this.tapCounter = 0;
  }
}
