import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCocheComponent } from './components/padre-coche-component/padre-coche-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { ComicsExcelComponent } from './components/comics-excel-component/comics-excel-component';

const routes: Routes = [
  { path: "listaproductos", component: ListaProductosComponent },
  { path: "padrecoches", component: PadreCocheComponent },
  { path: "deportes", component: PadreDeportesComponent },
  { path: "comicssimple", component: ComicsSimpleComponent },
  { path: "comicsjson", component: ComicsJsonComponent },
  { path: "comicsexcel", component: ComicsExcelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }