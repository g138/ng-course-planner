import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable, Subject} from "rxjs";
import {User} from "./user";
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private availableUsers: User[] = [];
  UserChanges = new Subject<User[]>();

  constructor( private afs: AngularFirestore) { }

  getUsers(){
    this.afs
      .collection('users')
      .snapshotChanges()
      .map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            username: doc.payload.doc.data()['username'],
            email: doc.payload.doc.data()['email'],
            password: doc.payload.doc.data()['password']
          };
        });
      })
      .subscribe((users: User[]) => {
        console.log(users);
        this.availableUsers = users;
        this.UserChanges.next([...this.availableUsers]);
      });
  }

  createUser(user: User) {
    let addUser = this.afs.collection('users');
    addUser.add({
      username: user.username,
      email: user.email
    });
  }

  deleteUser(id: string) {
    this.afs.collection('users').doc(id).delete();
  }

}
