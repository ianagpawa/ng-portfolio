import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  cars;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.cars = [1,2,3, 1,2,3];
    // techblog
    // weather
    // music
  }

}
