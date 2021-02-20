import { Router } from '@angular/router';
import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService,
              private Router:Router) { }

  ngOnInit(): void {
  }

  signup(name,email,password, username){
    // console.log(name, email, password)
    this.AuthenticationService.signup(name,email,password,username).subscribe(
      data => {
        console.log(data)
        if(data.success === true)
        {
          alert("User registered, login in to continue.")
          this.Router.navigateByUrl('/login')
        }
      }
    )
  }

back(){
  
}
}
