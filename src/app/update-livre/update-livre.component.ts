import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../livre';
import { LivreService } from '../services/livres.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {
  livre: Omit<Livre, 'id'> = {
    nom: '',
    dateLecture: new Date().toISOString().slice(0, 10),
    lien: '',
    sites: [],
    langues: 'FR',
    chapitresLus: null,
    notes: 0,
  };
  dates: string[] = [];
  chapitresOptions: number[] = Array.from({ length: 300 }, (_, i) => i + 1);
  notesOptions: number[] = Array.from({ length: 11 }, (_, i) => i);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private livreService: LivreService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.livreService.getLivreById(id).subscribe((livre) => {
        this.livre = livre;
      });
    }

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

  modifierLivre(): void {
    if (this.livre) {
      this.livre.dateLecture = new Date(this.livre.dateLecture).toISOString().slice(0, 10);
      this.livreService.modifierLivre(this.livre).subscribe(() => {
        this.router.navigate(['/livres']);
      });
    }
  }

  ajouterSite(): void {
    if (this.livre) {
      this.livre.sites.push({ nom: '', domaine: '' });
    }
  }

  retirerDernierSite(): void {
    if (this.livre && this.livre.sites.length > 0) {
      this.livre.sites.pop();
    }
  }

  supprimerSite(index: number): void {
    if (this.livre) {
      this.livre.sites.splice(index, 1);
    }
  }
}
