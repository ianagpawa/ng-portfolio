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

  constructor() { }

  ngOnInit(): void {
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

  getTechUsed(arr): string{
    return arr.join(', ');
  }

}
