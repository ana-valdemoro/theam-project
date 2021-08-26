import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsProvider {
  private readonly route: string = 'https://private-anon-77bb24f6e9-gocco.apiary-mock.com/stores/1/products/search' ; 
  constructor(private http: HttpClient) { 
  }

    getCategoryProducts(categoryId:string):Observable<any>{
        let link = this.route + "?category_id="+categoryId;
        return this.http.get<any>(link);
    }
}