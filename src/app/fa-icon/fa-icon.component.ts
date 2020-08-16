import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.css']
})
export class FaIconComponent implements OnInit {
  @Input() input: string[];

  constructor() { }

  ngOnInit(): void { }
}
