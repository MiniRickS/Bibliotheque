import { Component } from '@angular/core';
import { Livre } from './livre';
import { LivreService } from './services/livres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  livres: Livre[] =[];

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.livreService.getLivres().subscribe((livres: Livre[]) => {
      this.livres = livres;
    });
  }
}
