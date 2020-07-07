import {Component, Input, OnInit} from '@angular/core';
import {  faUser, faEllipsisV, faCoffee, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {User} from "../users/user";
import {AuthService} from "../auth/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {

  @Input() title: string;
  faCoffee = faCoffee;
  faUser = faUser;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faEllipsisV = faEllipsisV;
  user: User;
  constructor(private auth: AuthService, public loginValidationBar: MatSnackBar, private router: Router) {
    this.user = auth.currentUser();
    console.log(this.user);
  }

  logout() {
    this.router.navigate(['/login']).then(() => {
      this.loginValidationBar.open("You are logged out","OK", {
        duration: 3000,
      });
    });
  }

  ngOnInit(): void {
  }

}
