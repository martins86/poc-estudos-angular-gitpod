import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TopBarModule } from './top-bar.module';

import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TopBarModule],
      declarations: [TopBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TopBarComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing toggleLeftBar', () => {
    it('should emit toggleLeftBarForMe', () => {
      // Arrange
      spyOn(component.toggleLeftBarForMe, 'emit');

      // Act
      component.toggleLeftBar();

      // Assert
      expect(component.toggleLeftBarForMe.emit).toHaveBeenCalled();
      expect(component.toggleLeftBarForMe.emit).toHaveBeenCalledWith(
        'toggleLeftBar'
      );
    });
  });
});
