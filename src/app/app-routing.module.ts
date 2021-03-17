import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesComponent } from './Componentes/detalles/detalles.component';

import { PaginaPrincipalComponent } from './Componentes/pagina-principal/pagina-principal.component';


const routes: Routes = [
  {path: 'Inicio', component:PaginaPrincipalComponent},
  {path: 'Detalle', component:DetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
