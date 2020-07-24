import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { faUser, faSave, faBan, faPlus } from "@fortawesome/free-solid-svg-icons";
import {User} from "../user";
import {FormGroup, NgForm} from "@angular/forms";

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
  @Output() creatingUserEvent = new EventEmitter<User>();
  creatingUser = false;
  user: User;
  constructor() {
    this.clear();
  }

  createNewUser(value) {
    this.creatingUser = value;
    this.createUserEvent.emit(value);
  }

  onSubmit(form) {
    if(form.valid) {
      this.creatingUserEvent.emit(this.user);
      this.creatingUser = false;
      this.clear();
    }
  }

  clear() {
    this.user = new User();
  }

  ngOnInit(): void {
  }

}
