import { QuestionService } from './../shared/question.service';
import { AuthenticationService } from './../shared/authentication.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
export interface DialogData {
  user_id:string
  score: number
}

@Component({
  selector: 'app-submit-popup',
  templateUrl: './submit-popup.component.html',
  styleUrls: ['./submit-popup.component.scss']
})
export class SubmitPopupComponent implements OnInit {
user_id;
  constructor(public dialogRef: MatDialogRef<SubmitPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router: Router,
    private AuthenticationService: AuthenticationService,
    private QuestionService: QuestionService) { }

  ngOnInit(): void {
    if(this.AuthenticationService.check_login()){
        this.user_id = JSON.parse(localStorage.getItem('token'))
  }
}

  submit(){
    if(this.AuthenticationService.check_login()){
      let response = {
        user_id : this.user_id.id,
        score: this.data.score
      }
      this.QuestionService.send_result(response).subscribe()
  }
  }

}
