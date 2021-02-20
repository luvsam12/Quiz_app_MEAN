import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login_check = this.AuthenticationService.check_login()

  constructor(private Router:Router,
              private AuthenticationService: AuthenticationService
            ) { }

  ngOnInit(): void {

  }

  signup(){
    this.Router.navigateByUrl('/signup')
  }

  login(){
    this.Router.navigateByUrl('/login')
  }

  logout(){
    localStorage.removeItem('token');
    this.Router.navigateByUrl('')
    location.reload();
  }

  go_to_home(){
    this.Router.navigateByUrl("/")
  }

}
