import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechieDetailsComponent } from './techie-details.component';

describe('TechieDetailsComponent', () => {
  let component: TechieDetailsComponent;
  let fixture: ComponentFixture<TechieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
