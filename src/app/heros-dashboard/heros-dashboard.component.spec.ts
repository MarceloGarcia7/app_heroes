import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosDashboardComponent } from './heros-dashboard.component';

describe('HerosDashboardComponent', () => {
  let component: HerosDashboardComponent;
  let fixture: ComponentFixture<HerosDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
