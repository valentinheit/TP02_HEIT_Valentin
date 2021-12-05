import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss'],
})
export class RecapitulatifComponent implements OnInit {
  @Input() nom = '';
  @Input() prenom = '';
  @Input() submitted = false;
  @Input() adresse = '';
  @Input() cp = 0;
  @Input() ville = '';
  @Input() tel = '';
  @Input() email = '';
  @Input() civilite = '';
  @Input() login = '';
  @Input() password = '';
  @Input() pays = '';
  constructor() {}

  ngOnInit(): void {}
}
