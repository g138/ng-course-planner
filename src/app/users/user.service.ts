import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs";
import {User} from "./user";
import * as firebase from "firebase";
import {AngularFireStorageReference} from "@angular/fire/storage";
import {AngularFirestoreCollection} from "@angular/fire/firestore";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private afs: AngularFirestore) { }
  userCollection: AngularFirestoreCollection<any>;
  collection: any;
  getUsers(){
    // this.afs.collection('users').stateChanges().subscribe(a => {
    //   const len = a.length;
    //   while (len >= 0) {
    //     console.log(a[0].payload.doc.id);
    //   }
    //
    // });
    this.userCollection = this.afs.collection<any>('users');
    this.collection = this.userCollection.snapshotChanges()
      .pipe(
        map(actions => actions.map(a => a.payload.doc.data()))
      );
    return this.afs.collection('users').valueChanges();
  }

}
