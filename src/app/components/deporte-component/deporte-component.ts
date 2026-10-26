import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deporte-component',
  standalone: false,
  styleUrl: './deporte-component.css',
  templateUrl: './deporte-component.html',
})
export class DeporteComponent {
  @Input() sport!: string;
  public mensaje!: string;
  
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

  mostrarFavorito(): void {
    // Le pasamos this.sport dentro del emit para que el padre lo reciba
    this.seleccionarFavoritoPadre.emit(this.sport);
    this.mensaje = "Su deporte favorito es " + this.sport;
  }
}