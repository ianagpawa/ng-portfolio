import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProject } from '../../app.interfaces';
import { PROJECTS } from './showcase.constants';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  @Output() output: EventEmitter<any> = new EventEmitter();

  projects: IProject[];
  blockCard: any;

  constructor() { }

  ngOnInit(): void {
    this.blockCard = {};

    this.projects = PROJECTS;

    this.projects.forEach(proj => this.blockCard[proj.id] = false);

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
