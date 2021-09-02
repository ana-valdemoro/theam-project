import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {
  @Output() closeEmitter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onNotifyClosure(){
    this.closeEmitter.emit(true);
  }
}
