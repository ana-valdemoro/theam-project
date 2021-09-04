import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductAPIResponse, SortingFilter} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsProvider {
  private readonly route: string = 'https://private-anon-4f86c5ec2a-gocco.apiary-mock.com/stores/1/products/search' ; 
  constructor(private http: HttpClient) { }

  
  getProductsByCategory(categoryId:string):Promise<ProductAPIResponse>{
    let link = this.route + "?category_id="+categoryId+ "&dir=desc&order=bestsellers";
      return this.http.get<ProductAPIResponse>(link).toPromise();
  }

  getProductsByCategoryAndOrdered(categoryId:string, sortFilter: SortingFilter):Promise<ProductAPIResponse>{
    let link = this.route + "?category_id="+categoryId+ "&order=" +sortFilter.order + "&dir=" + sortFilter.direction;
      return this.http.get<ProductAPIResponse>(link).toPromise();
  }
}