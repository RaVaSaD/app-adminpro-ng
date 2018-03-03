import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

  this.subscription = this.regresaObservable()
    .subscribe(
      // Primer callback del subscribe es si recibo algo con next.
      numero => console.log( 'Subscribe', numero),
      // Segundo callback del subscribe es si recibo algo con next.
      error => console.error('Error en el observable', error),
      // Tercer callback del subscribe es cuando el suscriptor terminó o finalizó.
      () => console.log('Completed')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(subscriber => {

      let contador = 0;

      const intervalo = setInterval( () => {

        contador += 1;

        const salida = {
          valor: contador
        };

        subscriber.next( salida );

        // if ( contador === 3) {
        //   clearInterval(intervalo);
        //   subscriber.complete();
        // }

        // if ( contador === 2) {
        //   // No salta el mensaje de error porque le hemos puesto un retry y que lo haga 2 veces.
        //   subscriber.error('Ayuda!!');
        // }

      }, 500);

    })
    .retry(2)
    .map( (resp: any) => {
      return resp.valor;
    })
    .filter(valor => {
      if ((valor % 2) === 1) {
        // impar
        return true;
      }else {
        // par
        return false;
      }
    });
  }

}
