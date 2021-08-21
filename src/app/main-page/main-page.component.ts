import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { Member } from '../_models/member';
import { MemberService } from '../_services/member.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private toastr: ToastrService,private auth: AngularFireAuth,
    private router: Router,private memberService: MemberService, 
    private cookieService: CookieService) { }

  member!: Member;

  ngOnInit() {
    this.getMember();
  }

  logout(){
    this.auth.signOut();
    this.router.navigate(['login']);
    this.cookieService.delete('auth_token');
    this.toastr.success("logout successful");
  }

  getMember(){
  this.memberService.getMember().subscribe(response => {
    this.member = response;
    this.toastr.success("Loaded data successfully !")
  },error => {
    this.toastr.error("Error in retrieving user data");
  });
}
}
