import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioContactsComponent } from './radio-contacts.component';

describe('RadioContactsComponent', () => {
  let component: RadioContactsComponent;
  let fixture: ComponentFixture<RadioContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioContactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
