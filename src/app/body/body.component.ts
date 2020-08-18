import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  modalInput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  showcaseOutput(event): void {
    if (event && event.selectedProject) {
      this.modalInput.emit(event.selectedProject);
    }
  }

}
