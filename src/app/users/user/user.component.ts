import {Component, Input, OnInit} from '@angular/core';
import { faUser, faInfo } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown, faTrashAlt, faEdit  } from "@fortawesome/free-regular-svg-icons"
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
  @Input() user: any;
  validationDelete: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  deleteValidation(value: boolean) {
    this.validationDelete = value;
  }

}
