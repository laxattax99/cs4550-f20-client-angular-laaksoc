import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/services/question.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  constructor(private svc: QuestionsService, private route: ActivatedRoute) {}
  questions = [];
  quizId = '';
  ngOnInit(): void {
    this.route.params.subscribe((ps) => {
      this.quizId = ps.quizId;
      this.svc
        .findQuestionsForQuiz(this.quizId)
        .then((qs) => (this.questions = qs));
    });
  }

  submitQuiz = () => {
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };
}
