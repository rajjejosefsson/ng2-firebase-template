import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.scss'],
  animations: [fadeInAnimation]
})

export class ProfileComponent implements OnInit{
  user: any;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.user = this.authService.user;
  }

}
