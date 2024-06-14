import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.red
    }
  ];

  public sortType:keyof Hero | '' = '';

  toggleUpperCase():void{
    (this.isUpperCase)
    ? this.isUpperCase = false
    : this.isUpperCase = true
    //console.log(this.isUpperCase)
  }

  toggleSort(sortType:keyof Hero | ''):void{
    this.sortType = sortType;
    console.log(this.sortType)
  }
}
