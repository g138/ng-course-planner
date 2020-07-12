import { Injectable } from '@angular/core';
import { User } from "../users/user";
import { Observable } from "rxjs";
import {LocalStorage} from "@ngx-pwa/local-storage";
import {AuthUser} from "./auth-user";
import { AngularFireAuth } from 'angularfire2/auth';
import { from } from 'rxjs';
import {fromPromise} from "rxjs/internal-compatibility";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // users: User[];
  isAuthenticated = false;

  constructor(private afauth: AngularFireAuth) {
    // this.users = [
    //   {username: 'lbilde', password:'123', email:'cheese@namnam.dk'},
    //   {username: 'ljb', password:'123', email:'cheese22@namnam22.dk'},
    //   {username: 'ilikechokolate', password:'123', email:'cheese33@namnam33.dk'}
    // ];
  }

  // login(username, password) : Observable<User>{
  //   let userAccepted = this.users
  //     .filter(x => x.username === username)
  //     .filter(y => y.password === password);
  //   if(userAccepted && userAccepted.length === 1) {
  //     // return Promise.resolve(userAccepted[0]);
  //     localStorage.setItem('currentUser', JSON.stringify({ token: "jwt will come later", username: userAccepted[0].username }));
  //     return new Observable(resolve => {
  //       setTimeout(() => resolve.next(userAccepted[0]), 3000);
  //     });
  //   } else {
  //     return new Observable(resolve => {
  //       resolve.next(null);
  //     });
  //   }
  // }

  login(email, password){
    const obs = from(this.afauth.auth.signInWithEmailAndPassword(email, password));
    return obs;
  }

  currentUser() {
    const obs = (this.afauth.authState);
    return obs;
  }

  logout(){
    const obs = from(this.afauth.auth.signOut());
    return obs;
  }

  IsAuthenticated() {
    return this.afauth.authState.subscribe(user => {
      if(user) {
        return true;
      } else {
        return  false;
      }
    })
  }

}
