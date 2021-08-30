import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesProvider {
  private readonly route: string = 'https://private-anon-9f830e58b1-gocco.apiary-mock.com/stores/1/categories' ; 
  constructor(private http: HttpClient, private categoryService: CategoryService) { 
  }
  getCategoriesList(): Promise<Category[]> {
    const categories =  this.http.get<any>(this.route).toPromise();
    return categories.then( categories => {
      this.categoryService.normalizeCategoryData(categories);
      return categories;
    });
    
  }


}