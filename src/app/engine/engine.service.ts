import { WindowRefService } from './../services/window-ref.service';
import { ElementRef, Injectable, NgZone } from '@angular/core';
import * as BABYLON from 'babylonjs';
import 'babylonjs-materials';
import { ExerciseMuscleService } from '../shared/services/exercise-muscle-service.service';

@Injectable({ providedIn: 'root' })
export class EngineService {
    private canvas!: HTMLCanvasElement;
    private engine!: BABYLON.Engine;

    private camera!: BABYLON.ArcRotateCamera;
    private scene!: BABYLON.Scene;

    private ambientLight!: BABYLON.Light;
    private directionalLight1!: BABYLON.Light;
    private directionalLight2!: BABYLON.Light;

    private muscleMaterial!: BABYLON.PBRMetallicRoughnessMaterial;
    private boneMaterial!: BABYLON.PBRMetallicRoughnessMaterial;
    private primaryHighlightMaterial!: BABYLON.PBRMetallicRoughnessMaterial;
    private secondaryHighlightMaterial!: BABYLON.PBRMetallicRoughnessMaterial;

    private mouseDownHit: string = '';

    private overlaidMeshes: BABYLON.AbstractMesh[] = [];

    public constructor(
        private ngZone: NgZone,
        private windowRef: WindowRefService,
        private exerciseMuscleService: ExerciseMuscleService
    ) {
        this.exerciseMuscleService.getMusclesHit().subscribe(muscles => {
            if (this.scene) this.highlight(muscles);
        });
    }

    public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
        this.canvas = canvas.nativeElement;
        this.engine = new BABYLON.Engine(this.canvas, true);

        this.scene = new BABYLON.Scene(this.engine);
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

        this.scene.onPointerDown = (event, result) => {
            if (result?.hit) {
                const selection = result?.pickedMesh ? result.pickedMesh.name : '';
                this.mouseDownHit = selection;
            }
        }

        this.scene.onPointerUp = (event, result) => {
            if (result?.hit) {
                const selection = result?.pickedMesh ? result.pickedMesh.name : '';
                if (this.mouseDownHit === selection) {
                    this.exerciseMuscleService.highlightMuscle(selection);

                    this.overlaidMeshes.forEach(mesh => mesh.renderOverlay = false)

                    result.pickedMesh!.overlayColor = new BABYLON.Color3(255, 165, 0);
                    result.pickedMesh!.renderOverlay = true;
                    this.overlaidMeshes.push(result.pickedMesh!)
                    setTimeout(() => {
                        result.pickedMesh!.renderOverlay = false;
                    }, 2000);
                }
            }
        }


        this.defineCamera();
        this.defineLights();
        this.defineMaterials();

        BABYLON.SceneLoader.ImportMesh('', '../../assets/sm_muscles.babylon', undefined, this.scene, (meshes) => {
            meshes.forEach(mesh => {
                mesh.material = mesh.name === '00' ? this.boneMaterial : this.muscleMaterial;
            })
        });

        this.scene.registerAfterRender(() => {
        });
        // this.scene.debugLayer.show({
        //     'embedMode': true
        // });
    }

    public highlight(muscles: Set<string>[]): void {
        const meshes = this.scene.meshes;
        const primary = [...muscles[0]];
        const secondary = [...muscles[1]];

        meshes.forEach(muscle => {
            muscle.material = muscle.name === '00' ? this.boneMaterial : this.muscleMaterial;
            muscle.renderOutline = false;
            muscle.outlineColor = new BABYLON.Color3(0, 0, 0);
            muscle.outlineWidth = 0.05;
        })

        if (secondary?.length) {
            const secondaryMuscles = [...secondary];
            const secondaryMusclesHit = meshes.filter(mesh => secondaryMuscles.includes(mesh.name));

            secondaryMusclesHit.forEach(muscle => {
                muscle.material = this.secondaryHighlightMaterial;
                muscle.outlineColor = new BABYLON.Color3(0, 1, 1);
                muscle.renderOutline = true;
            })
        }

        if (primary?.length) {
            const primaryMuscles = [...primary];
            const primaryMusclesHit = meshes.filter(mesh => primaryMuscles.includes(mesh.name));

            primaryMusclesHit.forEach(muscle => {
                muscle.material = this.primaryHighlightMaterial;
                muscle.outlineColor = new BABYLON.Color3(1, 0, 1);
                muscle.renderOutline = true;
            })
        }
    }

    private defineCamera() {
        this.camera = new BABYLON.ArcRotateCamera('Camera', 90, 1.5, 40, new BABYLON.Vector3(0, 15, 0), this.scene);
        this.camera.attachControl(this.canvas, true);
        this.camera.lowerRadiusLimit = 15;
        this.camera.upperRadiusLimit = 100;
        this.camera.wheelPrecision = 10;
    }

    private defineLights() {
        this.ambientLight = new BABYLON.HemisphericLight('ambientLight', new BABYLON.Vector3(0, 1, 0), this.scene);
        this.ambientLight.intensity = 0.75;
        this.directionalLight1 = new BABYLON.DirectionalLight('directionalLight', new BABYLON.Vector3(0, -.5, 0.5), this.scene);
        this.directionalLight1.intensity = 0.3;
        this.directionalLight2 = new BABYLON.DirectionalLight('directionalLight', new BABYLON.Vector3(0, -.5, -0.5), this.scene);
        this.directionalLight2.intensity = 0.3;
    }

    private defineMaterials() {
        this.muscleMaterial = new BABYLON.PBRMetallicRoughnessMaterial('muscleMaterial', this.scene);
        this.muscleMaterial.metallic = 0;
        this.muscleMaterial.roughness = 0.25;

        this.boneMaterial = new BABYLON.PBRMetallicRoughnessMaterial('boneMaterial', this.scene);
        this.boneMaterial.metallic = 0;
        this.boneMaterial.roughness = 0.75;

        this.primaryHighlightMaterial = new BABYLON.PBRMetallicRoughnessMaterial('boneMaterial', this.scene);
        this.primaryHighlightMaterial.baseColor = new BABYLON.Color3(1, 0, 1);
        this.primaryHighlightMaterial.metallic = 0;
        this.primaryHighlightMaterial.roughness = 0.25;

        this.secondaryHighlightMaterial = new BABYLON.PBRMetallicRoughnessMaterial('boneMaterial', this.scene);
        this.secondaryHighlightMaterial.baseColor = new BABYLON.Color3(0, 1, 1);
        this.secondaryHighlightMaterial.metallic = 0;
        this.secondaryHighlightMaterial.roughness = 0.25;
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
