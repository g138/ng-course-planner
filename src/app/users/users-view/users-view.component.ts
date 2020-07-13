import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html'
})
export class UsersViewComponent implements OnInit, OnDestroy {


  users: any;
  creatingUser: boolean;
  usersSubscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.UserChanges.subscribe(userss => {
      console.log(userss);
      this.users = userss;
    });
    this.userService.getUsers();
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  creatingUserEvent(value) {
    this.creatingUser = value;
  }

  userCreation(user) {
    console.log(user);
    this.userService.createUser(user);
    this.creatingUser = false;
  }

}
