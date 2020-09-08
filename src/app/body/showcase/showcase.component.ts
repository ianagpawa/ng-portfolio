import { Component, OnInit } from '@angular/core';
import { IProject } from '../../app.interfaces';
import { PROJECTS } from './showcase.constants';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  projects: IProject[];
  blockCard: any;
  responsiveOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      }, {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      }, {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];

    Promise.resolve(PROJECTS)
      .then( projects => this.projects = projects)
      .catch( () => this.projects = [] )
      .then( () => this.projects.forEach(proj => this.blockCard[proj.id] = false) );

    this.blockCard = {};
  }

  onHover(id): void {
    this.blockCard[id] = !this.blockCard[id];
  }

  getBlocking(id): boolean {
    return this.blockCard[id];
  }

  getTechUsed(arr): string {
    return arr.join(' and ');
  }

  getImagePath(id?: string): string {
    return `./assets/images/${id}.png`;
  }

}
