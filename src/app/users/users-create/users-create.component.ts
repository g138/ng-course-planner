import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faUser, faSave, faBan, faPlus } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  faUser = faUser;
  faSave = faSave;
  faBan = faBan;
  faPlus = faPlus;
  @Output() createUserEvent = new EventEmitter<boolean>();

  creatingUser = false;

  constructor() { }

  createNewUser(value) {
    this.creatingUser = value;
    this.createUserEvent.emit(value);
  }

  onSubmit() {

  }

  ngOnInit(): void {
  }

}
