import { Component, OnInit } from '@angular/core';
import { CategoriesProvider } from '../../providers/categories.provider';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropdown:boolean = false;
  constructor(private categoriesProvider: CategoriesProvider) { }

  ngOnInit(): void {
    this.categoriesProvider.getCategoriesList();
  }
  toggleDropMenu(){
    this.showDropdown = !this.showDropdown;
  }
  onShowDropdownMenu(){
    return this.showDropdown ? "show" : "";
  }

}
