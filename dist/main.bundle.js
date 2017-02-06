webpackJsonp([0,3],{

/***/ 1153:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return fadeInAnimation; });

// Component transition animations
var fadeInAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* trigger */])('fadeIn', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* transition */])(":enter", [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 0 }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('1000ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 1 }))
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* transition */])(":leave", [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('1000ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 0 }))
    ])
]);
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/fadeIn.animation.js.map

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FirebaseDbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseDbService = (function () {
    function FirebaseDbService() {
        this._database = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]();
    }
    Object.defineProperty(FirebaseDbService.prototype, "database", {
        get: function () {
            return this._database;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseDbService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], FirebaseDbService);
    return FirebaseDbService;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/firebaseDb.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(890),
            styles: [__webpack_require__(876)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/about.component.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__ = __webpack_require__(472);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
        this.isLoading = false;
        this.error = false;
        this.errorMessage = "Invalid email or password";
    }
    LoginComponent.prototype.signInWithFacebook = function () {
        this.firebaseService.signInWithFacebook().then(function (authState) {
            console.log("SIGNED IN WITH FACEBOOK");
        }).catch(function (error) {
        });
    };
    LoginComponent.prototype.onSigninWithEmail = function (form) {
        var _this = this;
        this.isLoading = true;
        this.firebaseService.signInWithEmailAndPassword(form.value.email, form.value.password).then(function (authState) {
            console.log("SIGNED IN WITH EMAIL");
            _this.isLoading = false;
            _this.router.navigate(['profile']);
        }).catch(function (error) {
            _this.isLoading = false;
            _this.error = true;
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(891),
            styles: [__webpack_require__(877)],
            animations: [__WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__["a" /* slideUpAnimation */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/login.component.js.map

/***/ },

/***/ 465:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__ = __webpack_require__(472);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.error = false;
        this.errorMessage = "ERRROR";
    }
    RegisterComponent.prototype.onSignUpWithEmail = function (form) {
        var _this = this;
        this.authService.createUserWithEmailAndPassword(form.value.email, form.value.password).then(function (authState) {
            _this.router.navigate(['profile']);
        }).catch(function (error) {
            _this.error = true;
            _this.errorMessage = error.message;
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(892),
            styles: [__webpack_require__(878)],
            animations: [__WEBPACK_IMPORTED_MODULE_3__shared_animations_slideUp_animation__["a" /* slideUpAnimation */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/register.component.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DocumentationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentationComponent = (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-documentation',
            template: __webpack_require__(893),
            styles: [__webpack_require__(879)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/documentation.component.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(894),
            styles: [__webpack_require__(880)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */]]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/home.component.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-pageNotFound',
            template: __webpack_require__(895),
            styles: [__webpack_require__(881)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/pageNotFound.component.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_animations_fadeIn_animation__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.authService.user;
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__(896),
            styles: [__webpack_require__(882)],
            animations: [__WEBPACK_IMPORTED_MODULE_2__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/profile.component.js.map

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebaseDb__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_animations_fadeIn_animation__ = __webpack_require__(134);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StorageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StorageComponent = (function () {
    function StorageComponent(angularFire, firebaseDbService, storageService, authService) {
        this.angularFire = angularFire;
        this.firebaseDbService = firebaseDbService;
        this.storageService = storageService;
        this.authService = authService;
        this.data = [];
    }
    StorageComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    StorageComponent.prototype.getData = function () {
        var _this = this;
        var uid = this.authService.uid;
        this.storageService.getDataById(uid).subscribe(function (res) {
            console.log("SUB:", res);
            _this.data = res;
        });
    };
    StorageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-storage',
            template: __webpack_require__(897),
            styles: [__webpack_require__(883)],
            animations: [__WEBPACK_IMPORTED_MODULE_5__shared_animations_fadeIn_animation__["a" /* fadeInAnimation */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebaseDb__["a" /* FirebaseDbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_firebaseDb__["a" /* FirebaseDbService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object])
    ], StorageComponent);
    return StorageComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/storage.component.js.map

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebaseDb__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageService = (function () {
    function StorageService(firebaseDbService, angularFire) {
        this.firebaseDbService = firebaseDbService;
        this.angularFire = angularFire;
    }
    StorageService.prototype.getDataById = function (uid) {
        return this.angularFire.database.list('/data/' + uid);
    };
    StorageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebaseDb__["a" /* FirebaseDbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_firebaseDb__["a" /* FirebaseDbService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* AngularFire */]) === 'function' && _b) || Object])
    ], StorageService);
    return StorageService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/storage.service.js.map

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return slideUpAnimation; });

// Component transition animations
var slideUpAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* trigger */])('slideUp', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* transition */])(':enter', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 0, transform: 'translateY(100%)' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('0.7s ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* transition */])(':leave', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* style */])({ opacity: 0, transform: 'translateY(-100%)' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* animate */])('1s ease-out')
    ])
]);
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/slideUp.animation.js.map

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGurad; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGurad = (function () {
    function AuthGurad(authService) {
        this.authService = authService;
    }
    AuthGurad.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated;
    };
    AuthGurad = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AuthGurad);
    return AuthGurad;
    var _a;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/auth.guard.js.map

/***/ },

/***/ 546:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 546;


/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(705);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/main.js.map

/***/ },

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(196);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(af, router) {
        this.af = af;
        this.router = router;
        this.isLoggedIn = false;
        console.log("AppComponent Loaded");
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            if (auth == null) {
                console.log("Not Logged in.");
                _this.router.navigate(['/login']);
                _this.isLoggedIn = false;
            }
            else {
                console.log("Successfully Logged in.");
                _this.isLoggedIn = true;
                _this.router.navigate(['/']);
            }
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(887),
            styles: [__webpack_require__(884)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/app.component.js.map

/***/ },

/***/ 705:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_nav_nav_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_sidenav_sidenav_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_autentication_login_login_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_autentication_register_register_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pageNotFound_pageNotFound_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_documentation_documentation_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_storage_storage_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_firebaseDb__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_storage_storage_service__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_guards_auth_guard__ = __webpack_require__(473);
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















// Initialize Firebase
var config = {
    apiKey: "AIzaSyBrHw_57Cw5Pszsmtoy6YJon30UMp6PorI",
    authDomain: "ctg-ionic.firebaseapp.com",
    databaseURL: "https://ctg-ionic.firebaseio.com",
    storageBucket: "ctg-ionic.appspot.com",
    messagingSenderId: "879316491849"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__navbar_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_sidenav_sidenav_component__["a" /* SideNavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_autentication_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_autentication_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pageNotFound_pageNotFound_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_documentation_documentation_component__["a" /* DocumentationComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_storage_storage_component__["a" /* StorageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__services_firebaseDb__["a" /* FirebaseDbService */],
                __WEBPACK_IMPORTED_MODULE_20__pages_storage_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_guards_auth_guard__["a" /* AuthGurad */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/app.module.js.map

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_autentication_login_login_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_autentication_register_register_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pageNotFound_pageNotFound_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_documentation_documentation_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_storage_storage_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_guards_auth_guard__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });










var APP_ROUTES = [
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__pages_autentication_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__pages_autentication_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_guards_auth_guard__["a" /* AuthGurad */]] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about_component__["a" /* AboutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_guards_auth_guard__["a" /* AuthGurad */]] },
    { path: 'documentation', component: __WEBPACK_IMPORTED_MODULE_7__pages_documentation_documentation_component__["a" /* DocumentationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_guards_auth_guard__["a" /* AuthGurad */]] },
    { path: 'storage', component: __WEBPACK_IMPORTED_MODULE_8__pages_storage_storage_component__["a" /* StorageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__shared_guards_auth_guard__["a" /* AuthGurad */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__pages_home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__pages_pageNotFound_pageNotFound_component__["a" /* PageNotFoundComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/app.routing.js.map

/***/ },

/***/ 707:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(authService) {
        this.authService = authService;
        this.isAuthenticated = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        // used to show Login or Logout button
        this.authService.authObservable.subscribe(function (result) {
            _this.isAuthenticated = result;
        });
    };
    NavComponent.prototype.onSignOut = function () {
        this.authService.signOut();
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__(888),
            styles: [__webpack_require__(885)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], NavComponent);
    return NavComponent;
    var _a;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/nav.component.js.map

/***/ },

/***/ 708:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SideNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNavComponent = (function () {
    function SideNavComponent(authService) {
        this.authService = authService;
        this.isAuthenticated = false;
    }
    SideNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authObservable.subscribe(function (result) {
            _this.isAuthenticated = result;
        });
    };
    SideNavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
            selector: 'app-sidenav',
            template: __webpack_require__(889),
            styles: [__webpack_require__(886)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], SideNavComponent);
    return SideNavComponent;
    var _a;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/sidenav.component.js.map

/***/ },

/***/ 709:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/environment.js.map

/***/ },

/***/ 710:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/polyfills.js.map

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// BehaviorSubject Documentation
// http://reactivex.io/rxjs/manual/overview.html#behaviorsubject
var AuthService = (function () {
    function AuthService(angularFire) {
        var _this = this;
        this.angularFire = angularFire;
        this._authState = null;
        this._isAuthenticated = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](false); // false is the initial value
        this._dbRoot = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('/');
        // Init user state
        angularFire.auth.subscribe(function (state) {
            _this._authState = state;
            _this._isAuthenticated.next(_this._authState !== null);
        });
    }
    Object.defineProperty(AuthService.prototype, "authObservable", {
        get: function () {
            return this._isAuthenticated.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "uid", {
        get: function () {
            return this._isAuthenticated ? this._authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this._isAuthenticated ? this._authState.auth : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        // used by the router (not an observable, only need to be checked once)
        get: function () {
            return this._authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.createUserWithEmailAndPassword = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signInWithEmailAndPassword = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(email, password).then(function (authState) {
            // Creates or Updates /users/uid
            _this._dbRoot.child('/users/' + authState.uid).update({
                uid: authState.uid,
                email: authState.email
            });
        });
    };
    AuthService.prototype.signInWithFacebook = function () {
        var _this = this;
        var provider = new __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"].FacebookAuthProvider();
        return __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // Creates or Updates /users/uid
            _this._dbRoot.child('/users/' + user.uid).update({
                accessToken: accessToken,
                uid: user.uid,
                email: user.email,
            });
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signOut().then(function () {
            // Sign-out successful.
        }, function (error) {
            console.log(error);
        });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/Users/rasmusjosefsson/Developer/ngProjects/template/rajje-templates/angular2/Github_public/r-ng2-template/src/auth.service.js.map

/***/ },

/***/ 876:
/***/ function(module, exports) {

module.exports = ".example-card {\n  width: 400px; }\n"

/***/ },

/***/ 877:
/***/ function(module, exports) {

module.exports = ".example-card {\n  width: 400px;\n  margin: 150px auto; }\n\n.example-full-width {\n  width: 100%; }\n\nbutton {\n  width: 100%; }\n\n.newAccount {\n  margin-top: 40px; }\n\nmd-progress-spinner {\n  margin-top: 20px;\n  height: 60px;\n  width: inherit; }\n\n.error-text {\n  color: red; }\n"

/***/ },

/***/ 878:
/***/ function(module, exports) {

module.exports = ".example-card {\n  width: 400px;\n  margin: 150px auto; }\n\n.example-full-width {\n  width: 100%; }\n\nbutton {\n  width: 100%; }\n\n.error-text {\n  color: red; }\n"

/***/ },

/***/ 879:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 880:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 881:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 882:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 883:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 884:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = "nav {\n  background-color: #009688;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  padding: 0 16px;\n}\n\n.container-fluid {\n  margin: 0 15px;\n}\n\n\n.navbar-default {\n  border: none;\n}\n\n\n.example-header-image {\n  background-image: url('../../../assets/user.png');\n  background-size: cover;\n  margin-top: 8px;\n  border: none;\n  background-color: #1DE9B6;\n}\n\nbutton.example-header-image {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n\nnav ul li a {\n  height: 55px;\n  line-height: 28px;\n  color: #fff;\n  font-size: 16px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n\n.navbar-brand {\n  color: #1DE9B6;\n  margin-top: 7px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n\n\n\n\nnav ul li a:hover, .navbar-brand:hover  {\n  color: #2b2b2b;\n}\n\n\n.active {\n  background-color: rgba(194, 43, 0, 1);\n}\n\n\n\n\n\n/* Collapsed when in mobile*/\n\n.navbar-default .navbar-nav > .active > a {\n  background-color: transparent;\n}\n\n.navbar-form {\n  border: none;\n}\n\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n\nbutton.navbar-toggle.collapsed {\n  margin-top: 15px;\n}\n\n.navbar-default .navbar-toggle {\n  border: none;\n}\n\n\n\n\n\n\n\n\n\n"

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = ".sidenav {\n  height: 100%; /* 100% Full-height */\n  width: 250px; /* 0 width - change this with JavaScript */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Stay on top */\n  top: 0;\n  left: 0;\n  background-color: #00695C;\n  overflow-x: hidden; /* Disable horizontal scroll */\n  padding-top: 60px; /* Place content 60px from the top */\n  -webkit-transition: 0.5s;\n  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n/* The navigation menu links */\n.sidenav a {\n  padding: 0 32px;\n  text-decoration: none;\n  font-size: 18px;\n  color: #ffffff;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\nhr {\n  border-color: rgba(0, 32, 26, 0.25);\n}\n\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover, .offcanvas a:focus{\n  color: #2b2b2b;\n}\n\n\nspan {\n  margin-right: 15px;\n}\n\nul {\n  list-style-type: none;\n  list-style-position:inside;\n  margin:0;\n  padding:0;\n}\n"

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = "<!-- Navigation Shared on all pages -->\n<app-nav></app-nav>\n<app-sidenav></app-sidenav>\n\n\n<div class=\"container\" style=\"padding-left: 220px\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <!-- Page content goes here  -->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Brand</a>\n    </div>\n\n\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n\n      <!-- Left Side navbar goes here -->\n      <ul class=\"nav navbar-nav\">\n      </ul>\n\n      <!-- Righ Side navbar goes here -->\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!isAuthenticated\" [routerLink]=\"['register']\"><a><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li *ngIf=\"!isAuthenticated\" [routerLink]=\"['login']\"><a><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n\n        <li *ngIf=\"isAuthenticated\"><a (click)=\"onSignOut()\"><span class=\"glyphicon glyphicon-lock\"></span> Logout</a></li>\n        <li *ngIf=\"isAuthenticated\" [routerLink]=\"['profile']\"><button md-card-avatar class=\"example-header-image\"></button></li>\n      </ul>\n    </div>\n\n\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div style=\"margin-top: 70px\"></div>\n"

/***/ },

/***/ 889:
/***/ function(module, exports) {

module.exports = "<div id=\"mySidenav\" class=\"sidenav\">\n  <br>\n  <a [routerLink]=\"['']\"><span class=\"glyphicon glyphicon-home\"></span>Home</a>\n\n  <div *ngIf=\"isAuthenticated\">\n    <hr>\n    <a [routerLink]=\"['/about']\"><span class=\"glyphicon glyphicon-info-sign\"></span>About</a>\n    <hr>\n    <a [routerLink]=\"['/documentation']\"><span class=\"glyphicon glyphicon-console\"></span>Documentation</a>\n    <hr>\n    <a [routerLink]=\"['/storage']\"><span class=\"glyphicon glyphicon-cloud\"></span>Storage</a>\n    <hr>\n  </div>\n</div>\n"

/***/ },

/***/ 890:
/***/ function(module, exports) {

module.exports = "<div [@fadeIn]=\"'true'\">\n\n\n  <h1>About us</h1>\n  <br>\n  <br>\n\n  <md-card class=\"example-card\">\n    <h2>Angular 2 Demo</h2>\n    <hr>\n    <img md-card-md-image src=\"https://angular.io/resources/images/logos/angular2/angular.svg\">\n    <md-card-content>\n      <br>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra mollis lectus et molestie.\n        Phasellus semper dui vel ante ultricies aliquet. Duis facilisis a tortor rutrum ornare.\n    </md-card-content>\n    <hr>\n    <md-card-actions>\n      <button md-button>LIKE</button>\n      <button md-button>SHARE</button>\n    </md-card-actions>\n  </md-card>\n\n</div>\n"

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = "<md-card class=\"example-card\"  [@slideUp]=\"'true'\">\n  <h2>Firebase Login</h2>\n  <hr>\n\n  <form *ngIf=\"!isLoading\" class=\"example-form\" #signInForm=\"ngForm\" (ngSubmit)=\"onSigninWithEmail(signInForm)\">\n    <md-input-container class=\"example-full-width\">\n      <input md-input placeholder=\"email@gmail.com\" type=\"email\" name=\"email\" ngModel required>\n    </md-input-container>\n\n    <br>\n\n    <md-input-container class=\"example-full-width\">\n      <input md-input placeholder=\"Password\" type=\"password\" name=\"password\" ngModel required>\n    </md-input-container>\n    <br>\n    <div class=\"text-center\">\n      <button md-raised-button color=\"primary\" type=\"submit\">Login</button>\n      <p *ngIf=\"error\" class=\"error-text\">{{errorMessage}}</p>\n    </div>\n    <div class=\"text-center newAccount\">\n      <a  [routerLink]=\"['/register']\">Create an account</a>\n    </div>\n  </form>\n\n  <div *ngIf=\"isLoading\" class=\"text-center\">\n    <md-progress-spinner mode=\"indeterminate\" color=\"primary\">Loading</md-progress-spinner>\n  </div>\n\n</md-card>\n\n\n"

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = "<md-card class=\"example-card\" [@slideUp]=\"'true'\">\n  <h2>Firebase Register</h2>\n  <hr>\n  <form #signUpForm=\"ngForm\" (ngSubmit)=\"onSignUpWithEmail(signUpForm)\" class=\"example-form\">\n    <md-input-container class=\"example-full-width\">\n      <input md-input placeholder=\"email@gmail.com\" type=\"email\" name=\"email\" ngModel required>\n    </md-input-container>\n    <br>\n    <md-input-container class=\"example-full-width\">\n      <input md-input type=\"password\" placeholder=\"Password\" name=\"password\" ngModel required>\n    </md-input-container>\n    <br>\n    <div class=\"text-center\">\n      <button md-raised-button type=\"submit\" color=\"primary\">Register</button>\n      <p *ngIf=\"error\" class=\"error-text\">{{errorMessage}}</p>\n    </div>\n  </form>\n</md-card>\n\n\n\n"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = "<div [@fadeIn]=\"'true'\">\n  <h1>Documentation</h1>\n  <a href=\"https://material.angular.io/\">Angular Material</a> <br>\n  <a href=\"https://firebase.google.com/docs/web/\">Firebase</a> <br>\n  <a href=\"https://github.com/angular/angularfire2\">AngularFire2</a> <br>\n</div>\n"

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = "<div [@fadeIn]=\"'true'\">\n\n\n  <h1>Angular 2 Template</h1>\n  <h4>by Rajjejosefsson</h4>\n\n  <br>\n  <p>This Template contains following:</p>\n  <ul>\n    <li>AngularFire2</li>\n    <li>Firebase</li>\n    <li>Angular Material 2</li>\n  </ul>\n\n</div>\n\n\n\n\n\n\n"

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = "<h1>Page Not Found - 404</h1>\n<h4>Please try another route</h4>\n"

/***/ },

/***/ 896:
/***/ function(module, exports) {

module.exports = "<div [@fadeIn]=\"'true'\">\n\n\n  <h1>Profile Page</h1>\n  <p><strong>Email:</strong> {{ user?.email }}</p>\n  <p><strong>UID:</strong> {{ user?.uid }}</p>\n\n</div>\n"

/***/ },

/***/ 897:
/***/ function(module, exports) {

module.exports = "<div [@fadeIn]=\"'true'\">\n\n  <h1>Storage</h1>\n\n  <ul>\n    <p *ngFor=\"let item of data\">\n      {{ item.control1 }} <br>\n      {{ item.control2 }} <br>\n      {{ item.control3 }} <br>\n    </p>\n  </ul>\n\n</div>\n"

/***/ }

},[1153]);
//# sourceMappingURL=main.bundle.map