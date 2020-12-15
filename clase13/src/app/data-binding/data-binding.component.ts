import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  @Input() data: number = 0;

  @Output() onCounterChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  add = (): void => {
    this.data = this.data + 1;
    
    this.onCounterChange.emit(this.data);
  }

  subtract = (): void => {
    this.data = this.data - 1;

    this.onCounterChange.emit(this.data);
  }

}
