import { Component } from '@angular/core';
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['documentation.component.scss'],
  animations: [fadeInAnimation]

})

export class DocumentationComponent {
}
