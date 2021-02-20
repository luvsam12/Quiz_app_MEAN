import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private AuthenticationService:AuthenticationService,
              private Router: Router) { }

  ngOnInit(): void {
  }

  login(username,pass){
    this.AuthenticationService.login(username,pass).subscribe(
      data => {
        if(data.success === true)
        {
          localStorage.setItem('token', JSON.stringify(data.user))
          this.Router.navigateByUrl("")
        }
      }
    )

  }

  back(){
    
  }
}
