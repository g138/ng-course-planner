import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../users/user";
import {Router} from "@angular/router";
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthService} from "../auth.service";
import {Subscription} from "rxjs";
import {delay} from "rxjs/operators";
import {AuthUser} from "../auth-user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginError: string;
  tryingToLogIn: boolean;
  constructor(private _snackBar: MatSnackBar, private router: Router, private authService: AuthService) {
    console.log('Hello');
  }
  request: Subscription;

  login(user: AuthUser) {
    this.tryingToLogIn = true;
    if(this.request) {
      this.request.unsubscribe();
    }
    this.request = this.authService.login(user.email, user.password)
      .subscribe(
        (lUser) => {
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
          this.tryingToLogIn = false;
        },
        (err) => {
          console.error(err);
          this.loginError = "An error occurred during login, see error in console";
          this.tryingToLogIn = false;
        },
        () => {
          console.log("Done!!");
          this.tryingToLogIn = false;
        }
       );
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    if(this.request) {
      this.request.unsubscribe();
    }
  }

}
