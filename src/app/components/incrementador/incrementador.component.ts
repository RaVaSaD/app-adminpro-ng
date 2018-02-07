import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() actualizaBarraEvent: EventEmitter<number> = new EventEmitter();

  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
   }

  ngOnInit() {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }

  onChanges( newValue: number) {

    if (newValue >= 100) {
      this.progreso = 100;
    }else if (newValue <= 0 ) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }
    this.txtProgress.nativeElement.value = this.progreso;
    this.actualizaBarraEvent.emit( this.progreso );
  }

  cambiarValor(valor: number) {
    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.actualizaBarraEvent.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
  }
}
