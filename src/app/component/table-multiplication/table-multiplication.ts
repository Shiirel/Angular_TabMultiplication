import { Component, Input } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-table-multiplication',
  templateUrl: './table-multiplication.html',
  styleUrls: ['./table-multiplication.css']
})

export class TableMultiplicationComponent {
  @Input() n: number = 2
}
