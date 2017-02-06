"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var firebase = require('firebase');
var AuthService = (function () {
    function AuthService() {
        this.db = firebase.database().ref('/');
    }
    AuthService.prototype.createUserWithEmailAndPassword = function (email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signInWithEmailAndPassword = function (email, password) {
        var _this = this;
        return firebase.auth().signInWithEmailAndPassword(email, password).then(function (authState) {
            // Creates or Updates /users/uid
            _this.db.child('/users/' + authState.uid).update({
                uid: authState.uid,
                email: authState.email
            });
        });
    };
    AuthService.prototype.signInWithFacebook = function () {
        var _this = this;
        var provider = new firebase.auth.FacebookAuthProvider();
        return firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // Creates or Updates /users/uid
            _this.db.child('/users/' + user.uid).update({
                accessToken: accessToken,
                uid: user.uid,
                email: user.email,
            });
        });
    };
    AuthService.prototype.signOut = function () {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            console.log(error.message);
        });
    };
    AuthService.prototype.currentUser = function () {
        return firebase.auth().currentUser;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
