import { Component, OnInit } from '@angular/core';
import { Site } from '../site';
import { SiteService } from '../services/site.service';
import { Router } from '@angular/router';

@Component({
selector: 'app-liste-site',
templateUrl: './liste-site.component.html',
styleUrls: ['./liste-site.component.css']
})
export class ListeSiteComponent implements OnInit {
sites: Site[] = [];

constructor(private siteService: SiteService, private router: Router) {}

ngOnInit() {
this.siteService.getSites().subscribe(sites => {
this.sites = sites;
});
}

supprimerSite(site: Site) {
this.siteService.supprimerSite(site).subscribe(() => {
this.siteService.getSites().subscribe(sites => {
this.sites = sites;
});
});
}

siteToModify: Site | null = null;

modifierSite(site: Site) {
this.router.navigate(['/modifier-site', site.id]);
}
}
