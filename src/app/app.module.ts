import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule}from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import{AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { ExceriseComponent } from './excerise/excerise.component';
import { FillComponent } from './fill/fill.component';
import{ReactiveFormsModule}from'@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { AngularFireAuthModule } from '@angular/fire/auth';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ExceriseComponent,
    FillComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
