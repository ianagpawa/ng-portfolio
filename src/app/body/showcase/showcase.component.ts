import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  @Output() output: EventEmitter<any> = new EventEmitter();

  apps: any[];
  constructor() { 
    
  }

  ngOnInit(): void {
    this.apps = [1,2,3, 1,2,3];

    // techblog
    // weather
    // music
  }

  onClick(event) {
    this.output.emit({ selectedApp: event });
  }

}
