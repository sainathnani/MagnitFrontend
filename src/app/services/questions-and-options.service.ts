import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { QuestionOptions } from "../domain/QuestionOptions";

@Injectable({
  providedIn: 'root'
})
export class QuestionsAndOptionsService {

  constructor(private http: HttpClient) { }

  getQuestionsAndOptions(questionId: Number) :Observable<QuestionOptions>{
    return this.http.get<QuestionOptions>('http://localhost:9095/magnit/questions/'+ questionId);
  }
}
