import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';

// Router para navegacion mediante programacion
import { Router } from '@angular/router';

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
  constructor(private heroesService: HeroesService, private routerNav: Router) {
    // Diferencia entre constructor y ngOnInit
    // El constructor carga Primero.
    console.log('Constructor carga primero');

  }

  ngOnInit() {
    console.log('ngOnIn siempre carga segundo');
    // Reciviendo datos de el servicio heroes
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);

  }

  // Navegacion entre paginas por programación
  /**
   * navegacion
   */
  public navegacion(index: number) {
    this.routerNav.navigate(['/heroe', index]);
    console.log(index);
  }

}
