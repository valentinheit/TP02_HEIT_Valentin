import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-saisie-client',
  templateUrl: './saisie-client.component.html',
  styleUrls: ['./saisie-client.component.scss'],
})
export class SaisieClientComponent implements OnInit {
  valid: boolean = true;
  constructor() {}

  submitted: boolean = false;
  nom: string = '';
  nomChanged: boolean = false;
  prenom: string = '';
  prenomChanged: boolean = false;
  adresse: string = '';
  cp: number = 0;
  ville: string = '';
  tel: string = '';
  telChanged: boolean = false;
  email: string = '';
  emailChanged: boolean = false;
  civilite: string = '';
  login: string = '';
  loginChanged: boolean = false;
  password: string = '';
  passwordChanged: boolean = false;
  confirmPassword: string = '';
  confirmPasswordChanged: boolean = false;
  pays: string = '';
  ngOnInit(): void {}

  isValid() {
    return this.isValid;
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  isEmailValid() {
    console.log(this.email);
    if (this.email) {
      const regexp = new RegExp('^[^@s]+@[^@s]+.[^@s]+$');
      if (regexp.test(this.email)) {
        return true;
      }
    }
    return false;
  }
  showRecap() {
    if (
      this.nom &&
      this.prenom &&
      this.email &&
      this.login &&
      this.password &&
      this.confirmPassword
    ) {
      this.submitted = true;
    }
  }

  isSamePassword() {
    if (this.password !== '' && this.password == this.confirmPassword) {
      return true;
    }
    return false;
  }
}
