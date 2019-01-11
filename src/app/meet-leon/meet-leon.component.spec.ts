import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetLeonComponent } from './meet-leon.component';

describe('MeetLeonComponent', () => {
  let component: MeetLeonComponent;
  let fixture: ComponentFixture<MeetLeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetLeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetLeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
