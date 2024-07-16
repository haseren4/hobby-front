import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WargamingFowSlideshowComponent } from './wargaming-fow-slideshow.component';

describe('WargamingFowSlideshowComponent', () => {
  let component: WargamingFowSlideshowComponent;
  let fixture: ComponentFixture<WargamingFowSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WargamingFowSlideshowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WargamingFowSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
