import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Output()
  onValue: EventEmitter<string> = new EventEmitter<string>();

  @Input() 
  placeholder: string = '';


  emitValue( value: string): void{
    this.onValue.emit(value);
  }

}
