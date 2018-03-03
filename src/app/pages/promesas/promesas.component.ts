import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    const promesa = new Promise((resolve, reject) => {

      let contador = 0;
      // setInterval es una función javascript que llama a la función indicada como primer argumento a intervalos regulares de tiempo,
      // estos intervalos vienen dados en milisegundos por el segundo argumento de la función.
      const intervalo = setInterval( () => {

        // contador = contador + 1;
        contador += 1;

        console.log(contador);

        if ( contador === 3) {
          resolve('OK!!');
          clearInterval(intervalo);
        }

        /* Para rechazar la promesa se hace con reject().
        if ( contador === 3) {
          reject('KO!!');
          clearInterval(intervalo);
        }
        */

      }, 1000);

    });

    // Primera forma
    promesa.then(
      mensaje => console.log('Terminó la primera promesa!!!', mensaje),
      () => console.log('ERROR!!!')
    );

    // Segunda forma y más limpia
    promesa.then(
      mensaje => console.log('Terminó la segunda promesa!!!', mensaje)
    ).catch( error => {
      console.error('Error en la promesa', error);
    });

    this.contarCuatro().then(
      mensaje => console.log('Terminó contarCuatro', mensaje)
    ).catch(
      error => console.log('Terminó contarCuatro', error)
    );

   }

  ngOnInit() {
  }

  contarCuatro (): Promise<boolean> {

    return new Promise((resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval( () => {

        contador += 1;

        console.log(contador);

        if ( contador === 4) {
          resolve(true);
          clearInterval(intervalo);
        }

      }, 1000);

    });

  }

}
