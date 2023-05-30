import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter$: Observable<{ counter: number }> = new Observable<{counter:number}>();
  constructor(private store: Store<{ counter: CounterState }>) {}
  ngOnInit(): void {
    this.counter$ = this.store.select('counter');
  }

 
}
