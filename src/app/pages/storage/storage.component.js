"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var StorageComponent = (function () {
    function StorageComponent(angularFire, firebaseDbService) {
        this.angularFire = angularFire;
        this.firebaseDbService = firebaseDbService;
        this.data = [];
    }
    StorageComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    StorageComponent.prototype.getData = function () {
        var _this = this;
        this.angularFire.auth.subscribe(function (authState) {
            var uid = authState.uid;
            _this.angularFire.database.list('/data/' + uid).subscribe(function (result) {
                console.log("Angularfire get", result);
                _this.data = result;
                console.log(_this.data);
            });
        });
    };
    // NATIVE FB CO
    StorageComponent.prototype.getTest = function () {
        this.firebaseDbService.dbRoot().child('/data').on('value', function (result) {
            var value = result.val();
            console.log("firebase get", result.val());
        });
    };
    StorageComponent = __decorate([
        core_1.Component({
            selector: 'app-storage',
            templateUrl: 'storage.component.html',
            styleUrls: ['storage.component.scss']
        })
    ], StorageComponent);
    return StorageComponent;
}());
exports.StorageComponent = StorageComponent;
