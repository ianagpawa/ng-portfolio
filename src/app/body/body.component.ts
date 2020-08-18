import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  modalInput: EventEmitter<any>;

  constructor() { }

  ngOnInit(): void {
    this.modalInput = new EventEmitter();
  }

  showcaseOutput(event): void {
    if (event && event.selectedApp) {
      this.modalInput.emit(event);
    }
  }

}
