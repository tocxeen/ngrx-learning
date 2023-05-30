import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { changeChannelName, customIncrement } from '../counter/state/counter.actions';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  channelName: string = '';

  constructor(private store: Store<{ counter: CounterState }>) {}

  onAdd(): void {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeChennelName(): void{
    this.store.dispatch(changeChannelName());
  }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.channelName = data.channelName;
    });
  }
}
