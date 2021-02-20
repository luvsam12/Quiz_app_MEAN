import { AppConfig } from './app.config';
import { question } from './question.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  get_questions():Observable<question[]>{
    return this.http.get<question[]>(`${AppConfig.QUESTIONS}`)
  }
}
