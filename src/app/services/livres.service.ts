import { Injectable } from '@angular/core';
import { Livre } from '../livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  livres: Livre[] = [
    {
      nom: 'Le Petit Prince',
      dateLecture: '01/01/2022',
      lien: 'https://www.example.com/le-petit-prince',
      langues: 'français, anglais',
      chapitresLus: '1-10',
      notes: 'Très belle histoire'
    }
  ];

  constructor() { }

  ajouterLivre(nouveauLivre: Livre): void {
    // Vérifier si un livre avec le même nom existe déjà
    const livreExistant = this.livres.find(livre => livre.nom === nouveauLivre.nom);
    if (livreExistant) {
      console.log('Un livre avec le même nom existe déjà dans la liste !');
      return;
    }
    else this.livres.push(nouveauLivre);
  }

  getLivres(): Livre[] {
    return this.livres;
  }

  supprimerLivre(livre: Livre): void {
    const index = this.livres.indexOf(livre);
    if (index !== -1) {
      this.livres.splice(index, 1);
    }
  }

}
