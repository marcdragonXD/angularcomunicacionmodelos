import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { HijoCocheComponent } from './components/hijo-coche-component/hijo-coche-component';
import { PadreCocheComponent } from './components/padre-coche-component/padre-coche-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { DeporteComponent } from './components/deporte-component/deporte-component';

@NgModule({
  declarations: [
    App,
    ListaProductosComponent,
    HijoCocheComponent,
    PadreCocheComponent,
    MenuComponent,
    PadreDeportesComponent,
    DeporteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
