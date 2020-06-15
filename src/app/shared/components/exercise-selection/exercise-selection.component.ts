import { Component, OnInit } from '@angular/core';
import { ExerciseMuscleService } from '../../services/exercise-muscle-service.service';
import { Exercise } from '../../models/exercise';
import { Muscle } from '../../models/muscle';

@Component({
    selector: 'app-exercise-selection',
    templateUrl: './exercise-selection.component.html',
    styleUrls: ['./exercise-selection.component.scss']
})
export class ExerciseSelectionComponent implements OnInit {

    exercises: Exercise[] = [];
    muscles: Muscle[] = [];

    selectedExercises: Exercise[] = [];

    primaryMuscles: number[] = [];
    secondaryMuscles: number[] = [];

    constructor(private exerciseMuscleService: ExerciseMuscleService) { }

    ngOnInit(): void {
        this.exercises = this.exerciseMuscleService.getExercises();
        this.muscles = this.exerciseMuscleService.getMuscles();
    }

    toggleExercise(exercise: Exercise): void {
        exercise.isSelected = !exercise.isSelected;
        this.saveSelectedExercises();
    }

    saveSelectedExercises() {
        this.selectedExercises = this.exercises.filter(exercise => exercise.isSelected);
        this.selectedExercises.forEach(exercise => {

        })
    }

}
