import { Router } from '@angular/router';
import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl } from '@angular/forms';


function passwordMatchValidator(password: string): ValidatorFn {
  return (control: FormControl) => {
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password).value === control.value ? null : { mismatch: true };
  };
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService,
              private Router:Router,
              private fb: FormBuilder) { }

  form: FormGroup;
  private formSubmitAttempt: boolean;
  registered: boolean = false;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;
  error = ""



  ngOnInit(): void {
    this.form = this.fb.group({
      Name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'),],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
        passwordMatchValidator('password')
      ]]
    });
  }

   isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  show(){
    this.showPassword = !this.showPassword
  }

  confirmShow(){
    this.showConfirmPassword = !this.showConfirmPassword
  }

  onSubmit(){
    if(this.form.valid){
      console.log(this.form.value)
      this.AuthenticationService.signup(this.form.value.Name,this.form.value.email,this.form.value.password).subscribe(
        data => {
          console.log(data)
          if(data.success === true)
          {
            alert("User registered, login in to continue.")
            this.Router.navigateByUrl('/login')
          }
          else {
            this.error = data.msg
          }
        }
      )
    }
  }

  // signup(name,email,password, username){
  //   // console.log(name, email, password)
  //   this.AuthenticationService.signup(name,email,password,username).subscribe(
  //     data => {
  //       console.log(data)
  //       if(data.success === true)
  //       {
  //         alert("User registered, login in to continue.")
  //         this.Router.navigateByUrl('/login')
  //       }
  //     }
  //   )
  // }
}
