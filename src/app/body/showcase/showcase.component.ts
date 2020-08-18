import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProject } from '../../app.interfaces';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  @Output() output: EventEmitter<any> = new EventEmitter();

  projects: IProject[];
  constructor() { 
    
  }

  ngOnInit(): void {
    this.projects = [
      {
        id: 'techBlog',
        title: 'Tech Blog',
        description: 'A tech blog'
      }, {
        id: 'weather',
        title: 'Weather App',
        description: 'A web app for viewing the weather.'
      }, {
        id: 'auralHistory',
        title: 'Music web app',
        description: 'something something web app'
      }, {
        id: 'techBlog',
        title: 'Tech Blog',
        description: 'A tech blog'
      }, {
        id: 'weather',
        title: 'Weather App',
        description: 'A web app for viewing the weather.'
      }, {
        id: 'auralHistory',
        title: 'Music web app',
        description: 'something something web app'
      }
    ];

    // techblog
    // weather
    // news
  }

  onClick(event) {
    this.output.emit({ selectedProject: event });
  }

}
