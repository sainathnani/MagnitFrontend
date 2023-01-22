import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {


@Input() data: any;

@Input()  question :any;
  showTextField: boolean = false;

  changeGender(event: any) {


    event.target.name == 1 ? sessionStorage.setItem('root',event.target.id) : null;

    this.showTextField = event?.target?.id == 22;

    if(sessionStorage.getItem(event.target.name) != null) {
        sessionStorage.setItem(event.target.name, event.target.value);
        return;
    }
    sessionStorage.setItem(event.target.name, event.target.value);
  }
}
