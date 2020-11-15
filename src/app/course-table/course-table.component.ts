import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css'],
})
export class CourseTableComponent implements OnInit {
  courses = [];
  selectedCourseId = { title: '' };

  constructor(
    private activedRoute: ActivatedRoute,
    private courseService: CourseService
  ) {}

  // selectCourse = (course) => {
  //   this.selectedCourseId = course._id;
  // };

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      this.selectedCourseId = params.courseId;
    });

    this.courseService
      .findAllCourses()
      .then((courses) => (this.courses = courses));
  }
}
