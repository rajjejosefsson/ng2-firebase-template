import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {FirebaseDbService} from "../../services/firebaseDb";
import {StorageService} from "./storage.service";
import {AuthService} from "../../services/auth.service";
import {fadeInAnimation} from "../../shared/animations/fadeIn.animation";

@Component({
  selector: 'app-storage',
  templateUrl: 'storage.component.html',
  styleUrls: ['storage.component.scss'],
  animations: [fadeInAnimation]
})

export class StorageComponent implements OnInit {
  data: any[] = [];


  constructor(private angularFire: AngularFire,
              private firebaseDbService: FirebaseDbService,
              private storageService: StorageService,
              private authService: AuthService) {
  }


  ngOnInit() {
    this.getData();
  }


  getData() {
    let uid = this.authService.uid;

    this.storageService.getDataById(uid).subscribe(res => {
      console.log("SUB:", res);
      this.data = res;
    });
  }

}
