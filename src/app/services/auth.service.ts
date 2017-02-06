import {Injectable} from "@angular/core";
import * as firebase from 'firebase';
import {AngularFire, FirebaseAuthState} from "angularfire2";
import {BehaviorSubject, Observable} from "rxjs";

// BehaviorSubject Documentation
// http://reactivex.io/rxjs/manual/overview.html#behaviorsubject

@Injectable()
export class AuthService {
  private _dbRoot: firebase.database.Reference;
  private _authState: FirebaseAuthState = null;
  private _isAuthenticated = new BehaviorSubject<boolean>(false); // false is the initial value

  get authObservable(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }


  constructor(private angularFire: AngularFire) {
    this._dbRoot = firebase.database().ref('/');

    // Init user state
    angularFire.auth.subscribe((state: FirebaseAuthState) => {
      this._authState = state;
      this._isAuthenticated.next(this._authState !== null);
    });
  }


  get uid(): string {
    return this._isAuthenticated ? this._authState.uid : '';
  }

  get user() {
    return this._isAuthenticated ? this._authState.auth : '';
  }


  // used by the router (not an observable, only need to be checked once)
  get isAuthenticated(): boolean {
    return this._authState !== null;
  }


  createUserWithEmailAndPassword(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signInWithEmailAndPassword(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password).then(authState => {
      // Creates or Updates /users/uid
      this._dbRoot.child('/users/' + authState.uid).update({
        uid: authState.uid,
        email: authState.email
      })
    });
  }


  signInWithFacebook() {
    let provider = new firebase.auth.FacebookAuthProvider();

    return firebase.auth().signInWithPopup(provider).then(result => {

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      let accessToken = result.credential.accessToken;

      // The signed-in user info.
      let user = result.user;

      // Creates or Updates /users/uid
      this._dbRoot.child('/users/' + user.uid).update({
        accessToken: accessToken,
        uid: user.uid,
        email: user.email,
      });
    });
  }


  signOut() {
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    }, function (error) {
      console.log(error);
    });
  }


}
