import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';
import { LivreService } from '../services/livres.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.css']
})
export class ListeLivresComponent implements OnInit {
  livres: Livre[] = [];

  constructor(private livreService: LivreService, private router: Router) { }

  ngOnInit() {
    this.livreService.getLivres().subscribe(livres => {
      this.livres = livres;
    });
  }

  supprimerLivre(livre: Livre) {
    this.livreService.supprimerLivre(livre).subscribe(() => {
      this.livreService.getLivres().subscribe(livres => {
        this.livres = livres;
      });
    });
  }

  livreToModify: Livre | null = null;

  modifierLivre(livre: Livre) {
    this.router.navigate(['/modifier-livre', livre.id]);
  }

}
