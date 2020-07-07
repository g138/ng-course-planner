import { Injectable } from '@angular/core';
import { User } from "../users/user";
import { Observable } from "rxjs";
import {LocalStorage} from "@ngx-pwa/local-storage";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User[];


  constructor(private localStorage: LocalStorage) {
    this.users = [
      {username: 'lbilde', password:'123', email:'cheese@namnam.dk'},
      {username: 'ljb', password:'123', email:'cheese22@namnam22.dk'},
      {username: 'ilikechokolate', password:'123', email:'cheese33@namnam33.dk'}
    ];
  }

  login(username, password) : Observable<User>{
    let userAccepted = this.users
      .filter(x => x.username === username)
      .filter(y => y.password === password);
    if(userAccepted && userAccepted.length === 1) {
      // return Promise.resolve(userAccepted[0]);
      localStorage.setItem('currentUser', JSON.stringify({ token: "jwt will come later", username: userAccepted[0].username }));
      return new Observable(resolve => {
        setTimeout(() => resolve.next(userAccepted[0]), 3000);
      });
    } else {
      return new Observable(resolve => {
        resolve.next(null);
      });
    }
  }

  currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  // login(username, password) : Promise<User>{
  //   let userAccepted = this.users
  //     .filter(x => x.username === username)
  //     .filter(y => y.password === password);
  //   if(userAccepted && userAccepted.length === 1) {
  //     // return Promise.resolve(userAccepted[0]);
  //     return new Promise(resolve => {
  //       setTimeout(() => resolve(userAccepted[0]), 3000);
  //     });
  //   } else {
  //     return Promise.resolve(null);
  //   }
  // }

  logout(){
    return localStorage.removeItem('currentUser');
  }

}
