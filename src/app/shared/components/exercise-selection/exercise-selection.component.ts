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

    primaryMuscles: Set<number> = new Set();
    secondaryMuscles: Set<number> = new Set();

    suggestionsActive: boolean = false;

    muscleAsFilter: Muscle = {} as Muscle;

    hasSelectedExercise: boolean = false;

    constructor(private exerciseMuscleService: ExerciseMuscleService) { }

    ngOnInit(): void {
        this.getExercises();

        this.exerciseMuscleService.getMuscleAsFilter().subscribe(muscle => {
            if (muscle.id) {
                this.muscleAsFilter = muscle;
                this.filterExercises(muscle);
            } else {
                this.getExercises();
            }
        });

        this.exerciseMuscleService.selectionExists().subscribe(selectionExists => {
            this.hasSelectedExercise = selectionExists;
        })
    }

    getExercises() {
        this.exercises = this.exerciseMuscleService.getExercises();
    }

    filterExercises(muscle: Muscle) {
        this.getExercises();
        this.exercises = this.exercises.filter(exercise => exercise.primaryMusclesHit.includes(muscle.id)
            || (exercise.secondaryMusclesHit?.length ? exercise.secondaryMusclesHit.includes(muscle.id) : false))
    }

    toggleExercise(exercise: Exercise): void {
        this.exerciseMuscleService.toggleExercise(exercise);
    }

    resetSelection() {
        this.exerciseMuscleService.resetSelection();
        this.getExercises();
    }

    evaluate() {
        this.exerciseMuscleService.evaluate();
    }

}
