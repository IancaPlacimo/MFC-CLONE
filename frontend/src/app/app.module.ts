import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Pagina1Component } from './filmes/pagina1/pagina1.component';
import { F9Component } from './filmes/f9/f9.component';
import { MaisvistosComponent } from './filmes/maisvistos/maisvistos.component';
import { SaoComponent } from './filmes/sao/sao.component';
import { SpacejamComponent } from './filmes/spacejam/spacejam.component';
import { BarracadobeijoComponent } from './filmes/barracadobeijo/barracadobeijo.component';
import { SuicidesquadComponent } from './filmes/suicidesquad/suicidesquad.component';
import { EstreiasComponent } from './filmes/estreias/estreias.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Pagina1Component,
    F9Component,
    MaisvistosComponent,
    SaoComponent,
    SpacejamComponent,
    BarracadobeijoComponent,
    SuicidesquadComponent,
    EstreiasComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
   

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
