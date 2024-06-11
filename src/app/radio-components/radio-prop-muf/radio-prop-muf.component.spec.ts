import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPropMufComponent } from './radio-prop-muf.component';

describe('RadioPropMufComponent', () => {
  let component: RadioPropMufComponent;
  let fixture: ComponentFixture<RadioPropMufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioPropMufComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioPropMufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
