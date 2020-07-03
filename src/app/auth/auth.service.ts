import { Injectable } from '@angular/core';
import { User } from "../users/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[];


  constructor() {
    this.users = [
      {username: 'lbilde', password:'123', email:'cheese@namnam.dk'},
      {username: 'ljb', password:'123', email:'cheese22@namnam22.dk'},
      {username: 'ilikechokolate', password:'123', email:'cheese33@namnam33.dk'}
    ];
  }

  login(username, password) : Promise<User>{
    let userAccepted = this.users
      .filter(x => x.username === username)
      .filter(y => y.password === password);
    if(userAccepted && userAccepted.length === 1) {
      // return Promise.resolve(userAccepted[0]);
      return new Promise(resolve => {
        setTimeout(() => resolve(userAccepted[0]), 3000);
      });
    } else {
      return null;
    }
  }
}
