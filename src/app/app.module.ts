import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { CourseService } from 'src/services/course-service';
import { LessonService } from 'src/services/lesson-service';
import { ModuleService } from 'src/services/module-service';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { QuizzesService } from 'src/services/quiz.service.client';
import { QuestionsService } from 'src/services/question.service.client';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    CourseNavigatorComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [CourseService, LessonService, ModuleService, QuizzesService, QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
