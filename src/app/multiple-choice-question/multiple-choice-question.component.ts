import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css'],
})
export class MultipleChoiceQuestionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  question = {
    _id: '',
    title: '',
    question: '',
    choices: [],
    correct: '',
    answer: '',
    type: '',
  };
  @Input()
  answer = '';
  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () => this.answerChange.emit(this.answer);
  
  grading = false;
  showCorrect = false;
  showIncorrect = false;
  faCheck = faCheck;
  faTimes = faTimes;

  grade = () => {
    this.grading = true;
    if (this.question.answer === this.question.correct) {
      this.showIncorrect = false;
      this.showCorrect = true;
    } else {
      this.showCorrect = false;
      this.showIncorrect = true;
    }
  };

  radioChecked(choiceToCheck) {
    this.question.choices.forEach((choice) => {
      if (choice === choiceToCheck) {
        this.question.answer = choice;
      }
    });
  }
}
