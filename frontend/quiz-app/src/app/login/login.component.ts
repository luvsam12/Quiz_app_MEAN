import { Router } from '@angular/router';
import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  registered: boolean = false;
  public showPassword: boolean = false;


  constructor(private AuthenticationService:AuthenticationService,
              private Router: Router,
              private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'),],
      confirm: ['', ]
    });
  }

  show(){
    this.showPassword = !this.showPassword
  }


  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      // this.authService.login(this.form.value);
      console.log(this.form.value.email, this.form.value.password)


      this.AuthenticationService.login(this.form.value.email, this.form.value.password).subscribe(
        data => {
          console.log(data)
          if(data.success === true)
          {
            localStorage.setItem('token', JSON.stringify(data.user))
            this.Router.navigateByUrl("")
          }
          else{
            this.registered = true
          }
        }
      )
    }
    this.formSubmitAttempt = true;
  }
}
