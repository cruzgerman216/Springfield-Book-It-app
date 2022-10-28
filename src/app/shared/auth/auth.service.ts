import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const SIGN_UP_URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFT7Y4MA3r3fplD3_8fGv_riLZHpIOfFE"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUpRequest(email:string, password:string){
    return this.http.post(SIGN_UP_URL, {
      email, 
      password,
      returnSecureToken: true
    })
  }
}
