import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelryGemstoneListComponent } from './jewelry-gemstone-list.component';

describe('JewelryGemstoneListComponent', () => {
  let component: JewelryGemstoneListComponent;
  let fixture: ComponentFixture<JewelryGemstoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelryGemstoneListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JewelryGemstoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
