import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progresoAzul: number = 65;
  progresoVerde: number = 35;

  constructor() { }

  ngOnInit() {
  }

  actualiza(event: number, color: string) {
    console.log(event);
    if (color === 'azul') {
      this.progresoAzul = event;
    }
    // tslint:disable-next-line:one-line
    else if (color === 'verde'){
      this.progresoVerde = event;
    }

  }

}
