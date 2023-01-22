import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appQuestionOptions]'
})
export class QuestionOptionsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }

}
