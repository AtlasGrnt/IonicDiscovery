import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  username: string = '';
  password: string = '';
  cpassword: string = '';


  constructor(public afAuth: AngularFireAuth, public alert: AlertController, public router: Router) { }

  ngOnInit() {
  }

  async register(){
    const { username, password, cpassword} = this
    if (password !== cpassword) {
      this.showAlert('Erreur:', 'Les mots de passe ne correspondent pas')
      return console.log('Les mots de passe ne correspondent pas')
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password)
      console.log(res)
      this.showAlert('Success!', 'Bienvenue sur IonicDiscovery')
      this.router.navigate(['../home'])
    } catch (error) {
      console.dir(error)
      this.showAlert('Erreur', error.message)
    }    
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })
    await alert.present()
  }

}
