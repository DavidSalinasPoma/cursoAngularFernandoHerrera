import { Component, OnInit } from '@angular/core';

// como agarramos el parametro que viene por url
// Paso1.-
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  // En esta varible recibirimos un unico dato
  public heroe: any = {};
  // Injectando en el constructor el ActivateRoute
  constructor(private activateRoute: ActivatedRoute, private servicioHeroe: HeroesService) {

    // Es algo que esta pediente de cambios. es un observador
    this.activateRoute.params.subscribe(parametros => {
      // La variable codigo de la rutas
      // console.log(parametros[`codigo`]);
      this.heroe = this.servicioHeroe.getHeroe(parametros[`codigo`]);
      console.log(this.heroe);


    });
  }

  ngOnInit() {
  }

}
