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
  currentCategory: Category | undefined;
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

  showSubCategories(index:number): void {
    this.currentCategory = this.categories[index];
  }

  categoryMouseOut() {
    this.currentCategory = undefined;
  }
  private elaboratePath(labelCategory:string){
    let category = categoryRoutes.filter(category =>{
      if(labelCategory  == category.name || (category.name).includes(labelCategory)) return category
    });
    return '/'+ category[0].path;
  }

  private elaborateComponent(){

  }

}
