import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurScienceComponent } from './our-science.component';

describe('OurScienceComponent', () => {
  let component: OurScienceComponent;
  let fixture: ComponentFixture<OurScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
