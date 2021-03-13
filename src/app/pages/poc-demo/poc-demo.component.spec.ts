import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocDemoModule } from './poc-demo.module';
import { PocDemoComponent } from './poc-demo.component';

describe('PocDemoComponent', () => {
  let component: PocDemoComponent;
  let fixture: ComponentFixture<PocDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PocDemoComponent],
      imports: [PocDemoModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
