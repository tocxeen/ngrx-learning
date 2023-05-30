import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { customIncrement } from '../counter/state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent {

  constructor(private store:Store<{counter:CounterState}>){}
  value: number = 0;
  onAdd(): void{
    this.store.dispatch(customIncrement({value:+this.value}))
  }
}
