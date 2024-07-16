import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WargamesFowArmyListComponent } from './wargames-fow-army-list.component';

describe('WargamesFowArmyListComponent', () => {
  let component: WargamesFowArmyListComponent;
  let fixture: ComponentFixture<WargamesFowArmyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WargamesFowArmyListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WargamesFowArmyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
