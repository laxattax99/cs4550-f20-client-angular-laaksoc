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

  grade = () => { this.grading = true }

  radioChecked(choiceToCheck){
    this.question.choices.forEach(choice=>{
      if(choice === choiceToCheck){ 
         this.question.answer = choice
      } 
    })
  }


}
