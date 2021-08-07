import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
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
    private router: Router,private memberService: MemberService) { }

  member!: Member;

  ngOnInit() {
    this.getMember();
  }

  logout(){
    this.auth.signOut();
    this.router.navigate(['login']);
    localStorage.removeItem("auth_token");
    this.toastr.success("logout successful");
  }

  getMember(){
  this.memberService.getMember().subscribe(response => {
    this.member = response;
  },error => {
    this.toastr.error("Error in retrieving user data");
  });
}
}
