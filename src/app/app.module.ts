import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './components/goal/goal.component';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { AboutComponent } from './components/about/about.component';
import { StrikethroughDirective } from './directives/strikethrough.directive';
import { GoalFormComponent } from './components/goal-form/goal-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    AboutComponent,
    StrikethroughDirective,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
