import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

import * as firebase from 'firebase';


@Component({
  selector: 'app-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css']
})

export class NavComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // used to show Login or Logout button
    this.authService.authObservable.subscribe((result: boolean) => {
      this.isAuthenticated = result;
    });
  }

  onSignOut() {
    this.authService.signOut();
  }
}
