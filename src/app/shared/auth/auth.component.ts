import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onAuthSubmit(authFormObj) {
    // const email = authFormObj.value.email;
    // const password = authFormObj.value.password;

    const { email, password } = authFormObj.value;

    if (this.isLoginMode) {
      // send a request to login using firebase
    } else {
      // Send a request to sign up using firebase

      this.authService.signUpRequest(email, password).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    authFormObj.reset();
  }

  switchAuth() {
    this.isLoginMode = !this.isLoginMode;
  }
}
