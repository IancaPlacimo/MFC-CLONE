import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarracadobeijoComponent } from './filmes/barracadobeijo/barracadobeijo.component';
import { EstreiasComponent } from './filmes/estreias/estreias.component';
import { F9Component } from './filmes/f9/f9.component';
import { MaisvistosComponent } from './filmes/maisvistos/maisvistos.component';
import { Pagina1Component } from './filmes/pagina1/pagina1.component';
import { SaoComponent } from './filmes/sao/sao.component';
import { SpacejamComponent } from './filmes/spacejam/spacejam.component';
import { SuicidesquadComponent } from './filmes/suicidesquad/suicidesquad.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'titas', component: Pagina1Component},
  { path: 'f9', component: F9Component},
  { path: 'maisVistos', component: MaisvistosComponent},
  { path: 'estreias', component: EstreiasComponent},
  { path: 'sao', component: SaoComponent},
  { path: 'spacejam', component: SpacejamComponent},
  { path: 'barracadobeijo', component: BarracadobeijoComponent},
  { path: 'suicidesquade', component: SuicidesquadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
