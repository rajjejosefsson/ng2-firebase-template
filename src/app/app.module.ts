import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from "./app.routing";
import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {NavComponent} from "./navbar/nav/nav.component";
import {SideNavComponent} from "./navbar/sidenav/sidenav.component";
import {LoginComponent} from "./pages/autentication/login/login.component";
import {AuthService} from "./services/auth.service";
import {RegisterComponent} from "./pages/autentication/register/register.component";
import {PageNotFoundComponent} from "./pages/pageNotFound/pageNotFound.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AboutComponent} from "./pages/about/about.component";
import {DocumentationComponent} from "./pages/documentation/documentation.component";
import {StorageComponent} from "./pages/storage/storage.component";
import {MaterialModule} from "@angular/material";
import {FirebaseDbService} from "./services/firebaseDb";
import {AngularFireModule} from "angularfire2";
import {StorageService} from "./pages/storage/storage.service";
import {AuthGurad} from "./shared/guards/auth.guard";


// Initialize Firebase
export const config = {
  apiKey: "....",
  authDomain: ".....firebaseapp.com",
  databaseURL: "https://.....firebaseio.com",
  storageBucket: "......appspot.com",
  messagingSenderId: "..."
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideNavComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    PageNotFoundComponent,
    AboutComponent,
    DocumentationComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(config),
    routing],
  providers: [
    AuthService,
    FirebaseDbService,
    StorageService,
    AuthGurad],
  bootstrap: [AppComponent]
})


export class AppModule {
}
