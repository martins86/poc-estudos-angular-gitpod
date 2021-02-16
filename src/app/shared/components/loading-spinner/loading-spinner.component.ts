import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
    <div *ngIf="loadingMode">
      <div class="loading-content">
        <div class="content-spinner">
          <mat-spinner strokeWidth="10"></mat-spinner>
          <img src="./assets/images/logo-angular-icon.svg" alt="Logo Angular" />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  loadingMode = false;

  loadingSpinnerOn(): void {
    this.loadingMode = true;
  }

  loadingSpinnerOff(): void {
    this.loadingMode = false;
  }
}
