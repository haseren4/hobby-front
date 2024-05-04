import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioMainComponent } from './radio-main.component';

describe('RadioMainComponent', () => {
  let component: RadioMainComponent;
  let fixture: ComponentFixture<RadioMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
