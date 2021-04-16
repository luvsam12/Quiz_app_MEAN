import { SubmitPopupComponent } from './../submit-popup/submit-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuestionService } from './../shared/question.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/authentication.service';

@Component({
  selector: 'app-middle-screen',
  templateUrl: './middle-screen.component.html',
  styleUrls: ['./middle-screen.component.scss']
})
export class MiddleScreenComponent implements OnInit {
  start = true
  login_check = this.AuthenticationService.check_login();
  questions;
  count = 0;
  result = 0;
  retry = false;

  constructor(private AuthenticationService: AuthenticationService,
    private QuestionService: QuestionService,
    private router : Router,
    private dialogue: MatDialog) { }

  ngOnInit(): void {
    if(this.login_check){
      this.QuestionService.get_questions().subscribe(
        data => {
          // this.shuffle(data);
          this.questions = data;
          console.log(this.questions.data)
          // Used like so

        }
      )
    }
  }

  start_quiz(){
    this.start = false;
  }
  save_answere(ans){
    if(ans === this.questions.data[this.count].answere){
    document.getElementById(ans).style.border = "5px solid green"
    document.getElementById(ans).style.color = "green"
    this.result += 10;
    }
    else{
      document.getElementById(this.questions.data[this.count].answere).style.border = "5px solid green"
    document.getElementById(this.questions.data[this.count].answere).style.color = "green"
    document.getElementById(ans).style.border = "5px solid red"
    document.getElementById(ans).style.color = "red"
    }
    setTimeout(() => {
      document.getElementById(ans).style.border = "1px solid black"
      document.getElementById(ans).style.color = "black"
      document.getElementById(this.questions.data[this.count].answere).style.border = "1px solid black"
    document.getElementById(this.questions.data[this.count].answere).style.color = "black"
    if(this.count === 5){

      this.dialogue.open(SubmitPopupComponent, { disableClose: true, data:{score: this.result} });
    }
    else{
      this.count++;
      console.log(this.count);
    }
    }, 2000) ;
  }


  //suffel the array

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


  retry1(){
    location.reload();
  }
}
