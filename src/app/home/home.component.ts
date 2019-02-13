import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  archivesList : any[] = [
    {year:2018, month:1},
    {year:2018, month:2},
    {year:2018, month:3},
    {year:2018, month:4},
    {year:2018, month:5},
    {year:2018, month:6},
    {year:2018, month:7},
  ];

  constructor() { }


}
