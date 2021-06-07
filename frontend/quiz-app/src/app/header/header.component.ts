import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShown:boolean=false;
  login_check = this.AuthenticationService.check_login()
  small_screen = (window.innerWidth < 850) ? true : false;
  constructor(private Router:Router,
              private AuthenticationService: AuthenticationService
            ) { }

            ngOnChanges(){
              this.small_screen = (window.innerWidth < 850) ? true : false;
            }

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
    setTimeout(() => {
      location.reload();
    }, 200);

    this.Router.navigateByUrl('')
  }

  change_active(to){
    let list = [];
    if(this.login_check){
       list = ["Home", "About", "Attempts", "Bookmarks", "Create", "Profile"]
    }
    else{
       list = ["Home", "About"]
    }
    for(let i = 0; i < list.length; i++){
      document.getElementById(list[i]).style.color = "rgba(255,255,255,.5)"
    }
    console.log(to)
    document.getElementById(to).style.color = "#fff"
    this.isShown = false
  }

}
