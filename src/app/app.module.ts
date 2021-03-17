import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Componentes/nav/nav.component';
import { PaginaPrincipalComponent } from './Componentes/pagina-principal/pagina-principal.component';
import { DetallesComponent } from './Componentes/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PaginaPrincipalComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
