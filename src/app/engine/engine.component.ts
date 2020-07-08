import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EngineService } from './engine.service';
import { ExerciseMuscleService } from '../shared/services/exercise-muscle-service.service';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html',
    styleUrls: ['./engine.component.scss']
})
export class EngineComponent implements OnInit {

    @ViewChild('rendererCanvas', { static: true })
    public rendererCanvas!: ElementRef<HTMLCanvasElement>;

    selectedMuscle: string = '';

    constructor(
        private engServ: EngineService,
        private exerciseMuscleService: ExerciseMuscleService
    ) { }

    ngOnInit(): void {
        this.exerciseMuscleService.getSelectedMuscle().subscribe(muscle => this.selectedMuscle = muscle)
    }

    public createScene() {
        this.engServ.createScene(this.rendererCanvas);
        this.engServ.animate();
    }
}
