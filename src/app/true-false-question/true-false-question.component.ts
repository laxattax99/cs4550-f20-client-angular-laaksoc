import { Component, Input, OnInit } from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' , type: ''}
  grading = false
  faCheck = faCheck; faTimes = faTimes
  showCorrect = false
  showIncorrect = false

  grade = () => { 
    this.grading = true; 
    if (this.question.answer === this.question.correct){
      this.showIncorrect = false
      this.showCorrect = true
    }else{
      this.showCorrect = false
      this.showIncorrect = true
    }
  }

  radioChecked(choiceToCheck){
    this.question.choices.forEach(choice=>{
      if(choice === choiceToCheck){ 
         this.question.answer = choice
      } 
    })
  }


}
