import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryProducts} from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsProvider {
  private readonly route: string = 'https://private-anon-4f86c5ec2a-gocco.apiary-mock.com/stores/store_id/products/search' ; 
  constructor(private http: HttpClient) { }

  
  getProductsByCategory(categoryId:string):Observable<CategoryProducts>{
    let link = this.route + "?category_id="+categoryId;
      return this.http.get<CategoryProducts>(link);
  }
}