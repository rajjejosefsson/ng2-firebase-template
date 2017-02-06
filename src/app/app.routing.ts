import {Routes, RouterModule} from '@angular/router'
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/autentication/login/login.component";
import {RegisterComponent} from "./pages/autentication/register/register.component";
import {PageNotFoundComponent} from "./pages/pageNotFound/pageNotFound.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AboutComponent} from "./pages/about/about.component";
import {DocumentationComponent} from "./pages/documentation/documentation.component";
import {StorageComponent} from "./pages/storage/storage.component";
import {AuthGurad} from "./shared/guards/auth.guard";

const APP_ROUTES: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGurad] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGurad]},
  { path: 'documentation', component: DocumentationComponent, canActivate: [AuthGurad] },
  { path: 'storage', component: StorageComponent, canActivate: [AuthGurad] },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
