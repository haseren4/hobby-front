import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHorizComponent } from './nav-horiz.component';

describe('NavHorizComponent', () => {
  let component: NavHorizComponent;
  let fixture: ComponentFixture<NavHorizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavHorizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavHorizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
