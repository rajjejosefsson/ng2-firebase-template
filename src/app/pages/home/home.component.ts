import { Component } from '@angular/core';
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss'],
  animations: [fadeInAnimation]
})

export class HomeComponent {
}
