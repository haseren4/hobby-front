import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPotaComponent } from './radio-pota.component';

describe('RadioPotaComponent', () => {
  let component: RadioPotaComponent;
  let fixture: ComponentFixture<RadioPotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioPotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
