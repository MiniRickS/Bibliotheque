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
    id: 0,
    nom: '',
    dateLecture: new Date(),
    lien: '',
    sites: [
    ],
    langues: '',
    chapitresLus: 0,
    notes: 0
  };
  dates: string[] = [];

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      this.dates.push(date.toLocaleDateString('fr-FR'));
    }
  }

  ajouterLivre(): void {
    this.livreService.ajouterLivre(this.nouveauLivre).subscribe(() => {
      this.nouveauLivre = {
        id: 0,
        nom: '',
        dateLecture: new Date(),
        lien: '',
        sites: [
        ],
        langues: '',
        chapitresLus: 0,
        notes: 0
      };
    });
  }
}
