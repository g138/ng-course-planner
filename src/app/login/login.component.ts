import {Component, Input, OnInit} from '@angular/core';
import { faArrowLeft, faLock, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faLock = faLock;
  faExclamationCircle = faExclamationCircle;
  @Input() loginError: string;
  constructor() { }

  ngOnInit(): void {
  }

}
