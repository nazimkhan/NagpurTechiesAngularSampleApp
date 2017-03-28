import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechiesListComponent } from './techies-list.component';

describe('TechiesListComponent', () => {
  let component: TechiesListComponent;
  let fixture: ComponentFixture<TechiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
