import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowSectionComponent } from './row-section.component';

describe('RowSectionComponent', () => {
  let component: RowSectionComponent;
  let fixture: ComponentFixture<RowSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
