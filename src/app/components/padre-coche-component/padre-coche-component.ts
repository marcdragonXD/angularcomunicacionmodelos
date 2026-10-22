import { Component } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-padre-coche-component',
  standalone: false,
  styleUrl: './padre-coche-component.css',
  templateUrl: './padre-coche-component.html',
})
export class PadreCocheComponent {
  public arrayCoches: Array<Coche>;
  constructor() {
    this.arrayCoches = [
      new Coche("Ford", "Mustang", 0, 50),
      new Coche("Volkswagen", "Escarabajo", 0, 10),
      new Coche("Lamborghini", "Diablo", 0, 75) 
    ]
  }
}
