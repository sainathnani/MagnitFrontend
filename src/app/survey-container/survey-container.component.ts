import {Component, OnInit, ViewChild} from '@angular/core';
import {QuestionOptions} from "../domain/QuestionOptions";
import {QuestionOptionsDirective} from "../commons/question-options.directive";
import {SurveyComponent} from "../survey/survey.component";
import {QuestionsAndOptionsService} from "../services/questions-and-options.service";
import {DataStoreService} from "../services/data-store.service";
import {Options} from "../domain/Options";



@Component({
  selector: 'app-survey-container',
  templateUrl: './survey-container.component.html',
  styleUrls: ['./survey-container.component.css']
})
export class SurveyContainerComponent implements OnInit {

  questionId: number = 0;
  response: any;

  viewContainerRef: any;

  @ViewChild(QuestionOptionsDirective, {static: false}) appQuestionOptions!: QuestionOptionsDirective;

  constructor(private questionService: QuestionsAndOptionsService,
              private dataStore: DataStoreService) {
  }

  ngOnInit(): void {
    sessionStorage.clear();
    this.getQuestionAndOptions();
  }


  loadComponent() {

    this.viewContainerRef = this.appQuestionOptions.viewContainerRef;
    const componentRef = this.viewContainerRef.createComponent(SurveyComponent);

    if(this.dataStore.getItem(0) != null && sessionStorage.getItem('root')) {
      let filterId = parseInt(sessionStorage.getItem('root') || '1');
      this.response.options = this.response.options
        ?.filter((option: Options) => option.linked ? option.linkedOptionId == filterId: option)
    }
    componentRef.instance.data = this.response;

  }
  getQuestionAndOptions() {
    this.questionId++;
    this.questionService.getQuestionsAndOptions(this.questionId).subscribe((response: QuestionOptions) => {
      if (response.status === 'Success') {
        this.response = response;
        this.dataStore.addToItems(Object.create(response));
        this.loadComponent();
      }
    });

  }

  getScore() {

    var score = 0;

    for(let i = 1; i< 11; i++) {
      score = score + (parseInt(sessionStorage.getItem(i.toString()) || '0'));
    }

    alert("Employee Happiness Index - " + Math.ceil(score/38 * 100) + '%');
  }

}
