import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Output() nextPageAction: EventEmitter<null> = new EventEmitter();
  @Output() previousPageAction: EventEmitter<null> = new EventEmitter();

  constructor() { }

  nextPage() {
    this.nextPageAction.emit();
  }

  previousPage() {
    this.previousPageAction.emit();
  }

}
