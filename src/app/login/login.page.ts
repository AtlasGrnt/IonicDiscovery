import { Component, OnInit } from '@angular/core';
import {auth} from 'firebase/app';
import {Router} from '@angular/router';
import { Platform } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  providerFb: firebase.auth.FacebookAuthProvider;
  username = '';
  password = '';

  constructor(public afAuth: AngularFireAuth,
              public router: Router,
              private fb: Facebook,
              public platform: Platform,
              public afDB: AngularFireDatabase) {
                this.providerFb = new firebase.auth.FacebookAuthProvider();
               }

  ngOnInit() {
  }

  facebookLogin() {
    if (this.platform.is('cordova')) {
      console.log('Plateforme cordova');
      this.facebookCordova();
    } else {
      console.log('Plateforme Web');
      this.facebookWeb();
    }
}

facebookCordova() {
  this.fb.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
      firebase.auth().signInWithCredential(facebookCredential)
      .then((success) => {
        this.router.navigate(['../home']);
        console.log('Info Facebook: ' + JSON.stringify(success));
        this.afDB.object('Users/' + success.user.uid).set({
            displayName: success.user.displayName,
            photoURL: success.user.photoURL,
          });
      }).catch((error) => {
          console.log('Erreur: ' + JSON.stringify(error));
      });
  }).catch((error) => { console.log(error); });
}

facebookWeb() {
  this.afAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((success) => {
      this.router.navigate(['../home']);
      console.log('Info Facebook: ' + JSON.stringify(success));
      this.afDB.object('Users/' + success.user.uid).set({
            displayName: success.user.displayName,
            photoURL: success.user.photoURL
          });
    }).catch((error) => {
      console.log('Erreur: ' + JSON.stringify(error));
    });
}

  async login() {
    const { username, password } = this;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username,
      password);
      this.router.navigate(['../home']);

    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/operation-not-allowed') {
        console.log('User not Found');
      }
    }

  }

}
