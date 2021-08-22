import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { F9Component } from './filmes/f9/f9.component';
import { MaisvistosComponent } from './filmes/maisvistos/maisvistos.component';
import { Pagina1Component } from './filmes/pagina1/pagina1.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'titas', component: Pagina1Component},
  { path: 'f9', component: F9Component},
  { path: 'maisVistos', component: MaisvistosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
