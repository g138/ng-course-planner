import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() users: User

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  deleteUser(id) {
    this.userService.deleteUser(id);
  }

}
