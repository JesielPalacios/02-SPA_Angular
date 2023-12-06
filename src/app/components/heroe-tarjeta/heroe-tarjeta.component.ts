import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>; // En este caso heroeSeleccionado es un observable con el cual se puede subscribir y hacer otras cosas.

  constructor( private router:Router ) {
    this.heroeSeleccionado = new EventEmitter(); // Pero en ese caso lo único que se quiere es que se emita o se dispare ese componente un evento personalizado. 
  }

  ngOnInit(): void {
  }

  verHeroe() {
    // console.log( this.index );
    this.router.navigate( ['/heroe', this.index] );
    // this.heroeSeleccionado.emit( this.index ); // Se puede emitir cualquier cosa, pero en ese caso se hace ese número index.
    
  }

}
