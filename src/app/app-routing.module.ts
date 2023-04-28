import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { ListeLivresComponent } from './liste-livre/liste-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { ListeSiteComponent } from './liste-site/liste-site.component';

const routes: Routes = [
  { path: '', redirectTo: '/livres', pathMatch: 'full' },
  { path: 'livres', component: ListeLivresComponent },
  { path: 'ajout-livre', component: AddLivreComponent },
  { path: 'modifier-livre/:id', component: UpdateLivreComponent },
  { path: 'sites', component: ListeSiteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
