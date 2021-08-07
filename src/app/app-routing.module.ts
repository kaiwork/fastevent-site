import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guard/login.guard';
import { NologinGuard } from './guard/nologin.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path : 'login', component: LoginPageComponent,canActivate: [NologinGuard]},
  { path : 'main', component: MainPageComponent,canActivate: [LoginGuard]},
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
