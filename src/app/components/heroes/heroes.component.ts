import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';

// Requerimos interfaces
import { Heroe } from '../../interface/interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Declaramos la variable donde reibiremos la lista de heroes
  public heroes: Heroe[];
  /*
     Injectamos el servicio en el constructor donde queremos utilizar
     Private solo sera accesible en este componente
  */
  constructor(private heroesService: HeroesService) {
    // Diferencia entre constructor y ngOnInit
    // El constructor carga Primero.
    console.log('Constructor carga primero');

  }

  ngOnInit() {
    console.log('ngOnIn siempre carga segundo');
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);

  }

}
