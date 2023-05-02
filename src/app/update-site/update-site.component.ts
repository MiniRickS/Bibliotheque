import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../site';
import { SiteService } from '../services/site.service';

@Component({
  selector: 'app-update-site',
  templateUrl: './update-site.component.html',
  styleUrls: ['./update-site.component.css']
})
export class UpdateSiteComponent implements OnInit {
  site: Site = {
    id: 0,
    nom: '',
    domaine: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private siteService: SiteService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.siteService.getSiteById(id).subscribe((site) => {
        this.site = site;
      });
    }
  }

  modifierSite(): void {
    if (this.site) {
      this.siteService.modifierSite(this.site).subscribe(() => {
        this.router.navigate(['/sites']);
      });
    }
  }
}
