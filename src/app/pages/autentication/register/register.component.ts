import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {slideUpAnimation} from "../../../shared/animations/slideUp.animation";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
  animations: [slideUpAnimation]

})

export class RegisterComponent {
  error = false;
  errorMessage: string = "ERRROR";

  constructor(
    private authService: AuthService,
    private router: Router) {}


  onSignUpWithEmail(form: NgForm) {
    this.authService.createUserWithEmailAndPassword(form.value.email, form.value.password).then(authState => {
      this.router.navigate(['profile']);
    }).catch(error => {
       this.error = true;
       this.errorMessage = error.message;
    });
  }

}
