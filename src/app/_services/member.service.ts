import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Member } from '../_models/member';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient, private cookieService: CookieService) { }

getMember() {
  const token: string = this.cookieService.get('auth_token');;
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
  return this.http.get<Member>(this.baseUrl + 'user/',{ headers: headers });
}
}
