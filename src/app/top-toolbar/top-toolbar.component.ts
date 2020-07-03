import {Component, Input, OnInit} from '@angular/core';
import { faCoffee, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.css']
})
export class TopToolbarComponent implements OnInit {

  @Input() title: string;
  faCoffee = faCoffee;
  faSignInAlt = faSignInAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
