import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarModule } from './bottom-bar.module';

import { BottomBarComponent } from './bottom-bar.component';

describe('BottomBarComponent', () => {
  let component: BottomBarComponent;
  let fixture: ComponentFixture<BottomBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomBarModule],
      declarations: [BottomBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
