import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  leftBarOpen = false;

  leftBarToggle(): void {
    this.leftBarOpen = !this.leftBarOpen;
  }

  closeLeftBar(): void {
    this.leftBarOpen = false;
  }
}
