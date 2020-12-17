import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent {

  name = '';
  lastname = '';
  active = false;

  constructor() { }

  @Output() onNameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onLastnameChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  nameChanged = ():void => {
    this.onNameChange.emit(this.name);
  }

  lastnameChanged = ():void => {
    console.log("lastnameChanged", this.lastname)
    this.onLastnameChange.emit(this.lastname);
  }

  activeChanged = ():void => {
    this.onActiveChange.emit(this.active);
  }

}
