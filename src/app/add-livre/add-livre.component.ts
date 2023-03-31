import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../services/livres.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  nouveauLivre: Livre = {
    nom: '',
    dateLecture: '',
    lien: '',
    langues: '',
    chapitresLus: '',
    notes: ''
  };

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
  }

  ajouterLivre(): void {
    this.livreService.ajouterLivre(this.nouveauLivre);
    this.nouveauLivre = {
      nom: '',
      dateLecture: '',
      lien: '',
      langues: '',
      chapitresLus: '',
      notes: ''
    };
  }
}
