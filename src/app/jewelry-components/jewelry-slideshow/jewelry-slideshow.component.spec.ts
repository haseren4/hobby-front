import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelrySlideshowComponent } from './jewelry-slideshow.component';

describe('JewelrySlideshowComponent', () => {
  let component: JewelrySlideshowComponent;
  let fixture: ComponentFixture<JewelrySlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JewelrySlideshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JewelrySlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
