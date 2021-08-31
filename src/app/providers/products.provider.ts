import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductAPIResponse} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsProvider {
  private readonly route: string = 'https://private-anon-4f86c5ec2a-gocco.apiary-mock.com/stores/1/products/search' ; 
  constructor(private http: HttpClient) { }

  
  getProductsByCategory(categoryId:string):Observable<ProductAPIResponse>{
    let link = this.route + "?category_id="+categoryId;
      return this.http.get<ProductAPIResponse>(link);
  }
}