import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizzesService } from 'src/services/quiz.service.client';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css'],
})
export class QuizzesComponent implements OnInit {
  constructor(private service: QuizzesService, private route: ActivatedRoute) {}
  courseId = '';
  quizzes = [];
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes().then((quizzes) => (this.quizzes = quizzes));
    });
  }
}
