import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeLivresComponent } from './liste-livre/liste-livre.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { ListeSiteComponent } from './liste-site/liste-site.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { UpdateSiteComponent } from './update-site/update-site.component';
import { AddSiteComponent } from './add-site/add-site.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeLivresComponent,
    AddLivreComponent,
    ListeSiteComponent,
    UpdateLivreComponent,
    UpdateSiteComponent,
    AddSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
