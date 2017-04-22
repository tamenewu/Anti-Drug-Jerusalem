import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';



export const firebaseConfig = {
  apiKey: "AIzaSyBzTCOzgKlkX-8vxhzDDFdH_M5QKRW53gw",
    authDomain: "antidrugsjerusalem.firebaseapp.com",
    databaseURL: "https://antidrugsjerusalem.firebaseio.com",
    storageBucket: "antidrugsjerusalem.appspot.com",
    messagingSenderId: "767801084656"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    login 
  ],
  imports: [
    BrowserModule,
    IonicModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  exports:[IonicModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
