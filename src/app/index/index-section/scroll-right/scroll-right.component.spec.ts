import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollRightComponent } from './scroll-right.component';

describe('ScrollRightComponent', () => {
  let component: ScrollRightComponent;
  let fixture: ComponentFixture<ScrollRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
