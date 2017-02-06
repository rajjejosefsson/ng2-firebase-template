import { Component } from '@angular/core';
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss'],
  animations: [fadeInAnimation]
})

export class AboutComponent {

}
