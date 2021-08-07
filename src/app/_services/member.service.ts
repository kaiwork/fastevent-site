import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Member } from '../_models/member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

getMember() {
  const token = localStorage.getItem("auth_token");
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
  return this.http.get<Member>(this.baseUrl + 'user/',{ headers: headers });
}
}
