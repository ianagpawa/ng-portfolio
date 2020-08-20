import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.css']
})
export class FaIconComponent implements OnInit {
  @Input() input: string[];
  @Input() size: boolean;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
  }

  getSize() {
    return this.size;
  }

  getColor(): string {
    return this.color || 'black';
  }
}
