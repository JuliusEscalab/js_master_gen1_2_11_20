import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-component',
  templateUrl: './nested-component.component.html',
  styleUrls: ['./nested-component.component.css']
})
export class NestedComponentComponent implements OnInit {

  counter = 5;
  name = '';
  lastname = '';
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

  counterChange = (counter: number): void => {
    console.log({ counter })
    this.counter = counter;
  }

  nameChanged = (name: string): void => {
    this.name = name;
  }

  lastnameChanged = (lastname: string): void => {
    console.log(lastname)
    this.lastname = lastname;
  }

  activeChanged = (active: boolean): void => {
    this.active = active;
  }

}
