import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { NavbarState } from 'src/app/State/navbarCategory.state';

@Component({
  selector: 'app-mobile-nav-item',
  templateUrl: './mobile-nav-item.component.html',
  styleUrls: ['./mobile-nav-item.component.scss']
})
export class MobileNavItemComponent implements OnInit {
  areSubcategoriesShowed: boolean = false;
  @Input() Category: Category;
  @Output() closeEmitter = new EventEmitter<any>();
  constructor(private navbarCategoryState: NavbarState) { }

  ngOnInit(): void {
  }
  toggleSubMenuMobile(){
    this.areSubcategoriesShowed = !this.areSubcategoriesShowed;
  }
  onCloseMobileBar(){
    this.closeEmitter.emit({ close: true, category: this.Category});
  }

}
