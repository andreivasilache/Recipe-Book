import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyDescriptionComponent } from './empty-description.component';

describe('EmptyDescriptionComponent', () => {
  let component: EmptyDescriptionComponent;
  let fixture: ComponentFixture<EmptyDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
