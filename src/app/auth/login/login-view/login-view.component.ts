import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faHandshake, faExclamationCircle, faLock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {User} from "../../../users/user";

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

  @Input()
  user: any;

  @Output()
  tryLoginEmitter = new EventEmitter();

  @Input()
  tryingToLoginIn: boolean;

  constructor() {
    this.user = {};
  }

  tryLogin() {
    this.tryLoginEmitter.emit(this.user);
  }

  ngOnInit(): void {
  }

}
