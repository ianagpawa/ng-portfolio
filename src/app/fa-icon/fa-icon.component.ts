import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.css']
})
export class FaIconComponent implements OnInit {
  @Input() prefix: string;
  @Input() iconName: string;

  constructor() { }

  ngOnInit(): void { }

  getIcon() { return [this.prefix, this.iconName]; }

}
