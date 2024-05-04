import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryMainComponent } from './jewelry-main.component';

describe('JewelryMainComponent', () => {
  let component: JewelryMainComponent;
  let fixture: ComponentFixture<JewelryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelryMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JewelryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
