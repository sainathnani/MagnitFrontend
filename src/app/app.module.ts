import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import {QuestionsAndOptionsService} from "./services/questions-and-options.service";
import {HttpClientModule} from "@angular/common/http";
import { SurveyContainerComponent } from './survey-container/survey-container.component';
import { QuestionOptionsDirective } from './commons/question-options.directive';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {DataStoreService} from "./services/data-store.service";

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyContainerComponent,
    QuestionOptionsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [QuestionsAndOptionsService, DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
