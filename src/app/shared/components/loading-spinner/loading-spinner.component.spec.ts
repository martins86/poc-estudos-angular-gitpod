import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingSpinnerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LoadingSpinnerComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing loadingSpinnerOn', () => {
    it('should the loadingMode value be equal to true', () => {
      // Arrange
      component.loadingMode = false;

      // Act
      component.loadingSpinnerOn();

      // Assert
      expect(component.loadingMode).toBe(true);
    });

    it('should the value of loadingMode remain equal to true', () => {
      // Arrange
      component.loadingMode = true;

      // Act
      component.loadingSpinnerOn();

      // Assert
      expect(component.loadingMode).toBe(true);
    });
  });

  describe('Testing loadingSpinnerOff', () => {
    it('should the loadingMode value be equal to false', () => {
      // Arrange
      component.loadingMode = true;

      // Act
      component.loadingSpinnerOff();

      // Assert
      expect(component.loadingMode).toBe(false);
    });

    it('should the value of loadingMode remain equal to false', () => {
      // Arrange
      component.loadingMode = false;

      // Act
      component.loadingSpinnerOff();

      // Assert
      expect(component.loadingMode).toBe(false);
    });
  });
});
