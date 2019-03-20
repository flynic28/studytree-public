import { Component, OnInit, Input } from '@angular/core';
import { GridConfig } from './grid.model';

@Component({
  selector: 'app-row-section',
  templateUrl: './row-section.component.html',
  styleUrls: ['./row-section.component.scss']
})
export class RowSectionComponent implements OnInit {
  @Input() _rowSection: GridConfig;
  constructor() { }

  ngOnInit() {
  }

}
