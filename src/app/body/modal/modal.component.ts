import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() input: EventEmitter<any>;
  visible: boolean;
  constructor() { }

  ngOnInit(): void {
    this.input = new EventEmitter();
    this.visible = false;
  }

}
