import { login } from './login.model';
import { signup } from './signup.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from './app.config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signup(name,email,password):Observable<signup>{
    let data = {
      name: name,
      email: email,
      password: password,
    }
    return this.http.post<signup>(`${AppConfig.SIGN_UP}`, data)
  }

  login(email,pass):Observable<login>{
    let data = {
      email: email,
      password: pass
    }
    return this.http.post<login>(`${AppConfig.LOGIN}`,data)
  }

  check_login(){
    const user = JSON.parse(localStorage.getItem('token'))
    if(user !== null)
    {
      return true
    }
    return false
  }

  send_message(name, contact, message){
    const data = {
      name, contact, message
    }
    return this.http.post(`${AppConfig.MESSAGE}`, data);
  }
}
