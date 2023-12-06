import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from "@angular/router";

import { HeroesService } from "../../servicios/heroes.service";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
// export class HeroeComponent implements OnInit {
export class HeroeComponent {

  mostrarBandera = true;

  heroe:any = { };

  constructor( private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService
    ){

    this.activatedRoute.params.subscribe( params =>{
      // console.log(params);
      // console.log(params.id); // Devuelve simplemente un número, el número del index en este caso. Pero typeScript no estaría totamente seguro si params tiene ese id 
      // console.log( params['id'] ); // Devuelve simplemente un número,
      this.heroe = this._heroesService.getHeroe( params['id'] );
    }) 

  }
  // ngOnInit(): void {
  // }

}
