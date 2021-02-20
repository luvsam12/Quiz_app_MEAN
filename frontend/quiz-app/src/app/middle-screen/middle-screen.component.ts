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

  login_check = this.AuthenticationService.check_login();
  questions = undefined;
  count = 0;
  result = 0;
  retry = false

  constructor(private AuthenticationService: AuthenticationService,
    private QuestionService: QuestionService,
    private router : Router) { }

  ngOnInit(): void {
    if(this.login_check){
      this.QuestionService.get_questions().subscribe(
        data => {
          this.questions = data;
          console.log(this.questions.data)


          // Used like so
          this.shuffle(this.questions);
          this.shuffel_options();
          // console.log(data);
        }
      )
    }
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
    if(this.count != this.questions.data.length){
      this.count++;
      this.shuffel_options();
    }
    else{
      this.retry = true
    }
    }, 3000) ;
  }


  //suffel the array
  shuffel_options(){
    if(this.questions !== undefined){
      for(var i=0;i<this.questions.data.lemgth;i++)
      var array = [this.questions.data[i].option1,this.questions.data[i].option2,this.questions.data[i].option3,this.questions.data[i].option4]
      this.shuffle(array);
    }
  }

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
