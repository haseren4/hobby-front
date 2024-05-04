import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WargamingMainComponent } from './wargaming-main.component';

describe('WargamingMainComponent', () => {
  let component: WargamingMainComponent;
  let fixture: ComponentFixture<WargamingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WargamingMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WargamingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
