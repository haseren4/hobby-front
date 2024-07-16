import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WargamingFowMatchesComponent } from './wargaming-fow-matches.component';

describe('WargamingFowMatchesComponent', () => {
  let component: WargamingFowMatchesComponent;
  let fixture: ComponentFixture<WargamingFowMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WargamingFowMatchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WargamingFowMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
