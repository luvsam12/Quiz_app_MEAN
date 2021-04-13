import { QuestionService } from './../shared/question.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private QuestionService: QuestionService) { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
  ]);

  submit(q,a,o1,o2,o3,o4){
    let body = {
      question: q,
        answere: a,
        option1: o1,
        option2: o2,
        option3: o3,
        option4: o4
    }
    console.log(body)
    this.QuestionService.post(body).subscribe(data => {
      console.log(data)
      location.reload()
    })
  }
}
