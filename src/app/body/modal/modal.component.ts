import { Component, OnInit, Input, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProject } from 'src/app/app.interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() input: EventEmitter<any>;
  subscriptions: Subscription[];
  visible: boolean;
  description: string;
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.visible = false;
    // this.selectedProject = null;
    this.subscriptions = [];
  }

  ngAfterViewInit() {
    if (this.input) {
      this.input.subscribe((data: IProject) => {
        this.visible = true;
        console.log('data', data);
        this.description = data.description;
        this.title = data.title;
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach( x => x.unsubscribe() );
    this.subscriptions = [];
  }  

}
