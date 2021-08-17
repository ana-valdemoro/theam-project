import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesProvider } from '../../providers/categories.provider';
import { categoryRoutes } from 'src/app/models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories: Category[]; 
  constructor(private categoriesProvider: CategoriesProvider) { }

  ngOnInit(): void {
    this.categoriesProvider.getCategoriesList().subscribe(values  =>{
      
      this.categories = values.map(category =>{;
        category.route = this.elaboratePath(category.name);
        return category;
      })
    });
  }
  }
  toggleDropMenu(){
    this.showDropdown = !this.showDropdown;
  }
  onShowDropdownMenu(){
    return this.showDropdown ? "show" : "";
  }

}
