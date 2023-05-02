import { Component } from '@angular/core';
import { Livre } from './livre';
import { LivreService } from './services/livres.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public keycloak: KeycloakService;

  constructor(private keycloakService: KeycloakService) {
    this.keycloak = keycloakService;
  }
  async logout() {
    try {
      await this.keycloakService.logout();
    } catch (error) {
      console.error('Logout failed', error);
    }
  }
}


