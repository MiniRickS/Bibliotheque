import { Component, OnInit } from '@angular/core';
import { Livre } from '../livre';

import { LivreService } from '../services/livres.service';


@Component({
  selector: 'app-liste-livre',
  templateUrl: './liste-livre.component.html',
  styleUrls: ['./liste-livre.component.css']
})

export class ListeLivresComponent implements OnInit {
  livres: Livre[] = [];

  constructor(private livreService: LivreService) {}

  ngOnInit() {
    this.livres = this.livreService.getLivres();
  }

  supprimerLivre(livre: Livre) {
    this.livreService.supprimerLivre(livre);
    this.livres = this.livreService.getLivres();
  }

}
