import { MyattemptsComponent } from './myattempts/myattempts.component';
import { MiddleScreenComponent } from './middle-screen/middle-screen.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: "", component: MainScreenComponent, children:[
    { path:"", component: AboutmeComponent},
    { path: "home", component: MiddleScreenComponent},
    { path:"about-author", component: AboutmeComponent},
    { path: 'myattempts', component: MyattemptsComponent},
    { path: "create", component: CreateComponent},
  ]},
  { path:"signup", component: SignupComponent},
  { path: "login", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
