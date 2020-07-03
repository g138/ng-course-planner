import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from "../../users/user";
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string;
  constructor(private _snackBar: MatSnackBar, private router: Router, private authService: AuthService) {}

  login(user) {
    this.authService
      .login(user.username, user.password)
      .then((lUser) => {
        if(lUser) {
          this.loginError = null;
          this.router.navigate(['/']).then(() => {
            this._snackBar.open("You are logged in", "OK", {
              duration: 3000,
            });
          });
        } else {
          this.loginError = "Login Error";
        }
      });
  }

  ngOnInit(): void {
  }

}
