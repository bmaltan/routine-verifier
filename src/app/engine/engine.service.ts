import { WindowRefService } from './../services/window-ref.service';
import { ElementRef, Injectable, NgZone } from '@angular/core';
import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';

@Injectable({ providedIn: 'root' })
export class EngineService {
    private canvas!: HTMLCanvasElement;
    private engine!: BABYLON.Engine;
    private camera!: BABYLON.ArcRotateCamera;
    private scene!: BABYLON.Scene;
    private light!: BABYLON.Light;

    public constructor(
        private ngZone: NgZone,
        private windowRef: WindowRefService
    ) { }

    public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
        this.canvas = canvas.nativeElement;
        this.engine = new BABYLON.Engine(this.canvas, true);

        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        this.camera = new BABYLON.ArcRotateCamera('Camera', 90, 1.5, 40, new BABYLON.Vector3(0, 15, 0), this.scene);
        this.camera.attachControl(this.canvas, true);

        this.light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);

        BABYLON.SceneLoader.ImportMesh('', '../../assets/sm_muscles.babylon', undefined, this.scene, (meshes) => {
        });

        setTimeout(() => {
            console.log(this.scene);
        }, 2000);
        this.scene.registerAfterRender(() => {
        });

    }

    public animate(): void {
        this.ngZone.runOutsideAngular(() => {
            const rendererLoopCallback = () => {
                this.scene.render();
            };

            if (this.windowRef.document.readyState !== 'loading') {
                this.engine.runRenderLoop(rendererLoopCallback);
            } else {
                this.windowRef.window.addEventListener('DOMContentLoaded', () => {
                    this.engine.runRenderLoop(rendererLoopCallback);
                });
            }

            this.windowRef.window.addEventListener('resize', () => {
                this.engine.resize();
            });
        });
    }
}
