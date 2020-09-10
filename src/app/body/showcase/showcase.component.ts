import { Component, OnInit } from '@angular/core';
import { IProject } from '../../app.interfaces';
import { PROJECTS, GET_IMAGES } from './showcase.constants';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {

  images: any[];
  responsiveOptions:any[];

  constructor() { }

  ngOnInit() { this.initialize(); }

  initialize() {
    this.images = GET_IMAGES();
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 6
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
    ];
  }

  onClick(url): void { window.open(url); }
}
