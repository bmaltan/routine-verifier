import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EngineService } from 'src/app/engine/engine.service';
import { EngineComponent } from 'src/app/engine/engine.component';
import { ExerciseMuscleService } from 'src/app/shared/services/exercise-muscle-service.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
    @ViewChild('engineCard') engineCard!: ElementRef;
    @ViewChild('engine') engine!: EngineComponent;

    private sceneCreated = false;

    mobileGrid: string = '';
    mobileGridEval: string = '1fr 0';
    mobileGridNoEval: string = '0 1fr';

    constructor(
        private engineService: EngineService,
        private exerciseMuscleService: ExerciseMuscleService
    ) { }

    ngAfterViewInit(): void {
        this.adjustSize();
        window.addEventListener('resize', () => {
            this.adjustSize();
        });
    }

    ngOnInit(): void {
        this.mobileGrid = this.mobileGridNoEval;
        this.exerciseMuscleService.getIsEvaluating().subscribe(isEvaluating => {
            if (isEvaluating) {
                this.mobileGrid = this.mobileGridEval;
            } else {
                this.mobileGrid = this.mobileGridNoEval;
            }
        })

    }

    adjustSize() {
        const engineElement = this.engineCard.nativeElement;
        // const width = engineElement.clientWidth;
        // const height = engineElement.clientHeight;
        if (!this.sceneCreated) { this.engine.createScene(); }
        this.sceneCreated = true;
        // this.engineService.resize(width, height);
    }

}
