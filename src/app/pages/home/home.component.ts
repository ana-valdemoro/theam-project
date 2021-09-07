import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesProvider } from 'src/app/providers/categories.provider';
import { CategoryState } from 'src/app/State/Category.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private categoriesProvider: CategoriesProvider, private navbarCategoryState: CategoryState) { }
  categories:Category[]; 
  ngOnInit(): void {
    this.initializeHomeCategories();
  }
  initializeHomeCategories() {
    this.categoriesProvider.getCategoriesList().then(categories => {
      this.categories = categories;
    })
  }
  saveCategoryState(category: Category){
    this.navbarCategoryState.setCategory(category);
  }

}
