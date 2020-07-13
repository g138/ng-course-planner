import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSliderModule } from '@angular/material/slider';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { LoginComponent } from './auth/login/login.component';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { LoginViewComponent } from './auth/login/login-view/login-view.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatMenuModule } from "@angular/material/menu";
import { environment } from "../environments/environment";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { AuthGaurd } from "./auth/auth-gaurd";
import { UsersViewComponent } from './users/users-view/users-view.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { MatTableModule } from "@angular/material/table";
import { UserComponent } from './users/user/user.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersViewComponent, canActivate: [AuthGaurd] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    HomeComponent,
    LoginComponent,
    LoginViewComponent,
    UsersViewComponent,
    UsersListComponent,
    UsersCreateComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatTableModule
  ],
  providers: [AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
