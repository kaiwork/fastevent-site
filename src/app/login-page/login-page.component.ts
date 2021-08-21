import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private toastr: ToastrService,private auth: AngularFireAuth,private router: Router,
    private cookieService: CookieService) { }

  ngOnInit() {
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    signInSuccessData.authResult.user?.getIdToken().then((idToken) =>{
      this.cookieService.set('auth_token', idToken,{ expires: 0.001,secure:true, sameSite: 'Strict' });
    });
    this.router.navigate(['main']);
    this.toastr.success("Sign in successful");
  }

errorCallback(errorData: FirebaseUISignInFailure) {
  this.toastr.success("Login failure");
}


}
