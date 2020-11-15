import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from 'src/services/lesson-service';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css'],
})
export class LessonTabsComponent implements OnInit {
  courseId = '';
  moduleId = '';
  lessons = [];
  selectedLessonId = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private lessonService: LessonService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const courseId = params.courseId;
      this.courseId = courseId;
      const moduleId = params.moduleId;
      this.moduleId = moduleId;
      const lessonId = params.lessonId;
      if (typeof lessonId !== 'undefined') {
        this.selectedLessonId = lessonId;
      }
      if (typeof moduleId !== 'undefined') {
        this.lessonService
          .findLessonsForModule(moduleId)
          .then((lessons) => (this.lessons = lessons));
      }
    });
  }
}
