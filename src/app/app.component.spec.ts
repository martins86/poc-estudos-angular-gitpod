import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from './app.module';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing leftBarToggle', () => {
    it('should the leftBarOpen value be equal to false', () => {
      // Arrange
      component.leftBarOpen = true;

      // Act
      component.leftBarToggle();

      // Assert
      expect(component.leftBarOpen).toBe(false);
    });

    it('should the leftBarOpen value be equal to true', () => {
      // Arrange
      component.leftBarOpen = false;

      // Act
      component.leftBarToggle();

      // Assert
      expect(component.leftBarOpen).toBe(true);
    });
  });

  describe('Testing closeLeftBar', () => {
    it('should the leftBarOpen value be equal to false', () => {
      // Arrange
      component.leftBarOpen = true;

      // Act
      component.closeLeftBar();

      // Assert
      expect(component.leftBarOpen).toBe(false);
    });

    it('should the value of leftBarOpen remain equal to false', () => {
      // Arrange
      component.leftBarOpen = false;

      // Act
      component.closeLeftBar();

      // Assert
      expect(component.leftBarOpen).toBe(false);
    });
  });
});
