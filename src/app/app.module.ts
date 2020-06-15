import { WindowRefService } from './services/window-ref.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardDirective } from './shared/directives/card.directive';
import { ExerciseSelectionComponent } from './shared/components/exercise-selection/exercise-selection.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        EngineComponent,
        DashboardComponent,
        CardDirective,
        ExerciseSelectionComponent
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
