import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() input: EventEmitter<any>;
  subscriptions: Subscription[];
  visible: boolean;

  constructor() { }

  ngOnInit(): void {
    this.visible = false;
    this.subscriptions = [];

    if (this.input) {
      this.input.subscribe(data => {
        this.visible = true;
        console.log('data', data);
      });
    }
  }

}
