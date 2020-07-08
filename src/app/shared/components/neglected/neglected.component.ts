import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Muscle } from '../../models/muscle';
import { ExerciseMuscleService } from '../../services/exercise-muscle-service.service';

@Component({
    selector: 'app-neglected',
    templateUrl: './neglected.component.html',
    styleUrls: ['./neglected.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NeglectedComponent implements OnInit {

    neglectedMuscles: Muscle[] = [];
    muscleAsFilter: Muscle = {} as Muscle;

    constructor(private exerciseMuscleService: ExerciseMuscleService) {
        this.exerciseMuscleService.getNeglectedMuscles().subscribe(muscles => {
            this.neglectedMuscles = muscles;
        })
    }

    ngOnInit(): void {
    }

    setMuscleAsFilter(muscle: Muscle) {
        if (this.muscleAsFilter !== muscle) {
            this.muscleAsFilter = muscle;
            this.exerciseMuscleService.setMuscleAsFilter(muscle);
        } else {
            this.muscleAsFilter = {} as Muscle;
            this.exerciseMuscleService.setMuscleAsFilter();
        }
    }
}
