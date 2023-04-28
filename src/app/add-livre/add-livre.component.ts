import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../services/livres.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {
  nouveauLivre: Omit<Livre, 'id'> = {
    nom: '',
    dateLecture: new Date().toISOString().slice(0, 10),
    lien: '',
    sites: [],
    langues: 'FR',
    chapitresLus: null,
    notes: 0,
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

  formatDate(dateString: string): string {
    const date = new Date(Date.parse(dateString));
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

chapitresOptions: number[] = Array.from({length: 300}, (_, i) => i+1);
notesOptions: number[] = Array.from({length: 11}, (_, i) => i);

ajouterLivre(): void {
  this.nouveauLivre.dateLecture = new Date(this.nouveauLivre.dateLecture).toISOString().slice(0, 10);
  this.livreService.ajouterLivre(this.nouveauLivre).subscribe(() => {
    this.nouveauLivre = {
      nom: '',
      dateLecture: new Date().toISOString().slice(0, 10),
      lien: '',
      sites: [],
      langues: '',
      chapitresLus: 0,
      notes: 0
    };
  });
}

ajouterSite(): void {
  this.nouveauLivre.sites.push({ nom: '', domaine: '' });
}

retirerDernierSite(): void {
  this.nouveauLivre.sites.pop();
}

supprimerSite(index: number): void {
  this.nouveauLivre.sites.splice(index, 1);
}


}
