import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public message: string; // 1

  constructor() { // 2
    this.message = '';
  }

  ngOnInit(): void { // 3
    this.message = 'Bienvenidos a Angular 11';
  }

}
