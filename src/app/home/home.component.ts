import { Component, OnInit } from '@angular/core';
import {User} from "../users/user";
import {Observable} from "rxjs";
import {AngularFirestore} from "angularfire2/firestore";
import {UserService} from "../users/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
