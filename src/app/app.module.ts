import { WindowRefService } from './services/window-ref.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PanelDirective, CardDirective, MainDirective } from './shared/directives/styling.directive';
import { ExerciseSelectionComponent } from './shared/components/exercise-selection/exercise-selection.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonDirective } from './shared/directives/button.directive';
import { NeglectedComponent } from './shared/components/neglected/neglected.component';


@NgModule({
    declarations: [
        AppComponent,
        EngineComponent,
        DashboardComponent,
        ExerciseSelectionComponent,
        NeglectedComponent,

        ButtonDirective,
        PanelDirective,
        CardDirective,
        MainDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        FlexLayoutModule
    ],
    providers: [
        WindowRefService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
