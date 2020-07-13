import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { faUser, faInfo } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown, faTrashAlt, faEdit  } from "@fortawesome/free-regular-svg-icons"
import {User} from "../user";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrashAlt = faTrashAlt;
  faInfo = faInfo;
  faEdit = faEdit;
  faUser = faUser;
  @Input() user: User;
  validationDelete: boolean;
  @Output() deleteUserEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteValidation(value: boolean) {
    this.validationDelete = value;
  }
  delete() {
    this.deleteUserEvent.emit(this.user.id);
  }

}
