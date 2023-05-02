import { Component, OnInit } from '@angular/core';
import { Site } from '../site';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.css']
})
export class AddSiteComponent implements OnInit {
  nouveauSite: Omit<Site, 'id'> = {
    nom: '',
    domaine: ''
  };

  constructor(private siteService: SiteService) { }

  ngOnInit(): void {
  }

  ajouterSite(): void {
    this.siteService.ajouterSite(this.nouveauSite).subscribe(() => {
      this.nouveauSite = {
        nom: '',
        domaine: ''
      };
    });
  }

}
