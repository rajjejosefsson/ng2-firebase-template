import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {slideUpAnimation} from "../../../shared/animations/slideUp.animation";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  animations: [slideUpAnimation]

})

export class LoginComponent {
  isLoading = false;
  error = false;
  errorMessage: string = "Invalid email or password";

  constructor(private firebaseService: AuthService, private router: Router) {
  }


  signInWithFacebook() {
    this.firebaseService.signInWithFacebook().then(authState => {
      console.log("SIGNED IN WITH FACEBOOK");
    }).catch(error => {
    });
  }


  onSigninWithEmail(form: NgForm) {
    this.isLoading = true;

    this.firebaseService.signInWithEmailAndPassword(form.value.email, form.value.password).then(authState => {
      console.log("SIGNED IN WITH EMAIL");
      this.isLoading = false;
      this.router.navigate(['profile']);
    }).catch(error => {
      this.isLoading = false;
      this.error = true;
    });
  }

}
