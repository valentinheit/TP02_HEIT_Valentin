import { Component, OnInit, Input } from '@angular/core';

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
  prenom: string = '';
  adresse: string = '';
  cp: number = 0;
  ville: string = '';
  tel: string = '';
  email: string = '';
  civilite: string = '';
  login: string = '';
  password: string = '';
  confirmPassword: string = '';
  pays: string = '';
  ngOnInit(): void {}

  isValid() {
    return this.isValid;
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
