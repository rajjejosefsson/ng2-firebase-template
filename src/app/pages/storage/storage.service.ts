import {Injectable} from "@angular/core";
import {FirebaseDbService} from "../../services/firebaseDb";
import 'rxjs/Rx';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Observable} from "rxjs";

@Injectable()
export class StorageService {


  constructor(private firebaseDbService: FirebaseDbService,
              private angularFire: AngularFire) {
  }

  getDataById(uid: string): FirebaseListObservable<any[]> {
    return this.angularFire.database.list('/data/' + uid);
  }

}
