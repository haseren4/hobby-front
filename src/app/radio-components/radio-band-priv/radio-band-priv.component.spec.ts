import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBandPrivComponent } from './radio-band-priv.component';

describe('RadioBandPrivComponent', () => {
  let component: RadioBandPrivComponent;
  let fixture: ComponentFixture<RadioBandPrivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioBandPrivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioBandPrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
