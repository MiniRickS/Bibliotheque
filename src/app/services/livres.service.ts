import { Injectable } from '@angular/core';
import { Livre } from '../livre';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LivreService {
  livres: Livre[] = [
    {
      nom: 'Le Petit Prince',
      dateLecture: new Date('2022-01-01'),
      lien: 'https://www.example.com/le-petit-prince',
      site: 'https://www.example.com',
      langues: 'français, anglais',
      chapitresLus: 10,
      notes: 7
    }
  ];

  constructor(private router: Router) { }

  ajouterLivre(nouveauLivre: Livre): void {
    // Vérifier si un livre avec le même nom existe déjà
    const livreExistant = this.livres.find(livre => livre.nom === nouveauLivre.nom);
    if (livreExistant) {
      console.log('Un livre avec le même nom existe déjà dans la liste !');
      return;
    }
    else {
      this.livres.push(nouveauLivre);
      this.router.navigate(['/livres']);
    }
  }

  getLivres(): Livre[] {
    return this.livres;
  }

  modifierLivre(livre: Livre): void {
    this.router.navigate(['/modifier-livre', livre.nom]);
  }

  supprimerLivre(livre: Livre): void {//test
    const index = this.livres.indexOf(livre);
    if (index !== -1) {

      this.livres.splice(index, 1);
    }
  }

}
