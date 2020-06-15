import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EngineService } from 'src/app/engine/engine.service';
import { EngineComponent } from 'src/app/engine/engine.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
    @ViewChild('engineCard') engineCard!: ElementRef;
    @ViewChild('engine') engine!: EngineComponent;

    private sceneCreated = false;

    constructor(private engineService: EngineService) { }

    ngAfterViewInit(): void {
        this.adjustSize();
        window.addEventListener('resize', () => {
            this.adjustSize();
        });
    }

    ngOnInit(): void {

    }

    adjustSize() {
        const engineElement = this.engineCard.nativeElement;
        const width = engineElement.clientWidth;
        const height = engineElement.clientHeight;
        if (!this.sceneCreated) { this.engine.createScene(); }
        this.sceneCreated = true;
        // this.engineService.resize(width, height);
    }

}
