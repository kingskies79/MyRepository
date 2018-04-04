import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule} from 'angularfire2/angularfire2';
import { AuthService } from './providers/auth.service';

  // Initialize Firebase
  export const firebaseConfig = {
    apiKey: 'AIzaSyCqP2gz1bPSBAotKR-Ohq306fPwC_3btW4',
    authDomain: 'hello-world-196112.firebaseapp.com',
    databaseURL: 'https://hello-world-196112.firebaseio.com',
    projectId: 'hello-world-196112',
    storageBucket: 'hello-world-196112.appspot.com',
    messagingSenderId: '881736318085'
  };


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],

  imports: [BrowserModule, FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()
   ],

  providers: [AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
