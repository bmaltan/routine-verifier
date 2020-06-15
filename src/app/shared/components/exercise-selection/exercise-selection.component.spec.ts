import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSelectionComponent } from './exercise-selection.component';

describe('ExerciseSelectionComponent', () => {
  let component: ExerciseSelectionComponent;
  let fixture: ComponentFixture<ExerciseSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
