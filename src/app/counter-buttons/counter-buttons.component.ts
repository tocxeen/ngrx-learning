import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter/state/counter.actions';
import { CounterState } from '../counter/state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent {
  constructor(private store: Store<{ counter: CounterState }>) {}

  onIncrement(): void {
    this.store.dispatch(increment());
  }
  onDecrement(): void {
    this.store.dispatch(decrement());
  }
  onReset(): void {
    this.store.dispatch(reset());
  }
}


