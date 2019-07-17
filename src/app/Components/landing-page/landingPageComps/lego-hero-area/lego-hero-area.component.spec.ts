import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoHeroAreaComponent } from './lego-hero-area.component';

describe('LegoHeroAreaComponent', () => {
  let component: LegoHeroAreaComponent;
  let fixture: ComponentFixture<LegoHeroAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoHeroAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoHeroAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
