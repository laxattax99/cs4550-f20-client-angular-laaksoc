import { Component, Input, OnInit } from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' , type: ''}
  grading = false
  faCheck = faCheck; faTimes = faTimes

  grade = () => { this.grading = true; }

  radioChecked(choiceToCheck){
    this.question.choices.forEach(choice=>{
      if(choice === choiceToCheck){ 
         this.question.answer = choice
      } 
    })
  }

}
