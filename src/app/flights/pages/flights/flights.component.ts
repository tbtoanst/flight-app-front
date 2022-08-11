import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  title = "myFlightApp"
  constructor() { }
  ngOnInit(): void {
    console.log("This is my app");
  }
}
