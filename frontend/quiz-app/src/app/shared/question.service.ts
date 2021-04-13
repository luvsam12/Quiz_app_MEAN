import { AppConfig } from './app.config';
import { question } from './question.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { result, response } from './result.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  get_questions():Observable<question[]>{
    return this.http.get<question[]>(`${AppConfig.QUESTIONS}`)
  }

  send_result(body):Observable<result>{
    return this.http.post<result>(AppConfig.SUBMIT, body)
  }

  get_results(body){
    return this.http.post<response>(AppConfig.RESPONSE, body)
  }

  post(body):Observable<response>{
    return this.http.post<response>(AppConfig.QUESTIONS, body)
  }
}

