import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrl: './common-page.component.css'
})
export class CommonPageComponent {

  //i18nSelect
  public name:string = 'Armando';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female'
  }

  //i18nPlural

  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'Melissa']
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente a la espera.',   
    '=2': 'tenemos dos clientes a la espera.',  
    'other': 'tenemos # clientes a la espera.', 
  }

  deleteClient():void{
    this.clients.shift();
  }

  //KeyValue Pair
  public person = {
    name: 'Armando',
    age:28,
    address: 'Toluca, Mexico'
  }

  //Async Pipe
  public myObservableTimer = interval(1000).pipe(
    tap(value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject)=>
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      this.person.name = 'Nombre generico'
    }, 3500)
  )

}
