import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime, delay } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  
  private debouncer = new Subject<string>;//Suject es un observable y un observer a la vez 
  //es usado para emitir valores a otros componentes y suscribirse a ellos 

  private debouncerSubscription?:Subscription;

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.debouncerSubscription = 
    this.debouncer.pipe(
      debounceTime(300)
    ).subscribe(term =>{
      this.onDebounce.emit(term)
      console.log(term)
    })
  } 

  @Output()
  onValue: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter<string>();

  @Input() 
  placeholder: string = '';

  @Input()
  initialValue:string = '';

  emitValue( value: string): void{
    this.onValue.emit(value);
  }

  onKeyPressed(searchTerm: string){
    //this.emitValue(searchTerm)
    this.debouncer.next(searchTerm);
  }

}
