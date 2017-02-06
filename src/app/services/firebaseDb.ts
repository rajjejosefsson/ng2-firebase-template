import {Injectable} from "@angular/core";
import * as firebase from 'firebase';


@Injectable()
export class FirebaseDbService {

  private _database: firebase.database.Database;

  constructor() {
    this._database = firebase.database();
  }

  public get database() {
    return this._database;
  }


}


