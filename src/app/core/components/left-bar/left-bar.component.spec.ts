import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LeftBarModule } from './left-bar.module';

import { LeftBarComponent } from './left-bar.component';

describe('LeftBarComponent', () => {
  let component: LeftBarComponent;
  let fixture: ComponentFixture<LeftBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LeftBarModule],
      declarations: [LeftBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LeftBarComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing closeLeftBar', () => {
    it('should emit closeLeftBarForMe', () => {
      // Arrange
      const elementMock = document.createElement('input');
      elementMock.id = 'menu-checked';
      elementMock.checked = true;

      spyOn(document, 'getElementById').and.returnValue(elementMock);
      spyOn(component.closeLeftBarForMe, 'emit');

      // Act
      component.closeLeftBar();

      // Assert
      expect(component.closeLeftBarForMe.emit).toHaveBeenCalled();
      expect(component.closeLeftBarForMe.emit).toHaveBeenCalledWith(
        'closeLeftBar'
      );
    });
  });
});
