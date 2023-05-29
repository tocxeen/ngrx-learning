import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter: number = 0;
  onIncrement(): void{
    this.counter++;
  }
  onDecrement(): void{ 
    this.counter--;
  }
  onReset(): void{
    this.counter = 0;
  }

}
