import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioQrzLogbookComponent } from './radio-qrz-logbook.component';

describe('RadioQrzLogbookComponent', () => {
  let component: RadioQrzLogbookComponent;
  let fixture: ComponentFixture<RadioQrzLogbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioQrzLogbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioQrzLogbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
