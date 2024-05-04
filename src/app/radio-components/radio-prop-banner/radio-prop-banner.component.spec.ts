import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPropBannerComponent } from './radio-prop-banner.component';

describe('RadioPropBannerComponent', () => {
  let component: RadioPropBannerComponent;
  let fixture: ComponentFixture<RadioPropBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPropBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioPropBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
