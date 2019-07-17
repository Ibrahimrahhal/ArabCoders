import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSecondLevelComponent } from './hero-second-level.component';

describe('HeroSecondLevelComponent', () => {
  let component: HeroSecondLevelComponent;
  let fixture: ComponentFixture<HeroSecondLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSecondLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSecondLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
