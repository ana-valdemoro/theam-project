import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-mobile-nav-item',
  templateUrl: './mobile-nav-item.component.html',
  styleUrls: ['./mobile-nav-item.component.scss']
})
export class MobileNavItemComponent implements OnInit {
  areSubcategoriesShowed: boolean = false;
  @Input() Category: Category;
  @Output() closeEmitter = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  toggleSubMenuMobile(){
    this.areSubcategoriesShowed = !this.areSubcategoriesShowed;
  }
  onCloseMobileBar(subCategory:Category){
    this.closeEmitter.emit({ close: true, category: subCategory});
  }

}
