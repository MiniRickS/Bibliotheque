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
    dateLecture: new Date(),
    lien: '',
    site: '',
    langues: '',
    chapitresLus: 0,
    notes: 0
  };
  dates: string[] = []; // Ajout de la propriété "dates"

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    // Initialisation de la liste des dates pour les 30 derniers jours
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      this.dates.push(date.toLocaleDateString('fr-FR'));
    }
  }

  ajouterLivre(): void {
    this.livreService.ajouterLivre(this.nouveauLivre);
    this.nouveauLivre = {
      nom: '',
      dateLecture: new Date(),
      lien: '',
      site: '',
      langues: '',
      chapitresLus: 0,
      notes: 0
    };
  }
}
