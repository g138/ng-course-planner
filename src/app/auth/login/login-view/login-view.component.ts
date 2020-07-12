import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faHandshake, faExclamationCircle, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {User} from "../../../users/user";
import {AuthUser} from "../../auth-user";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faLock = faLock;
  faExclamationCircle = faExclamationCircle;
  faHandshake = faHandshake;

  @Input()
  loginError: string;

  user: AuthUser;

  @Output()
  tryLoginEmitter = new EventEmitter<AuthUser>();

  @Input()
  tryingToLoginIn: boolean;

  constructor() {
    this.user = new AuthUser();
  }

  tryLogin() {
    this.tryLoginEmitter.emit(this.user);
  }

  ngOnInit(): void {
  }

}
