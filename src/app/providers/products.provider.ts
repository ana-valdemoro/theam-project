import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductAPIResponse, SortingFilter} from '../models/product';
import { ProductRouteService } from '../services/product-route.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsProvider {
  private readonly route: string = 'https://private-anon-4f86c5ec2a-gocco.apiary-mock.com/stores/1/products/search' ; 
  constructor(private http: HttpClient, private productRouteService:ProductRouteService) { }

  
  getProductsByCategory(categoryId:string):Promise<ProductAPIResponse>{
    let link = this.route + "?category_id="+categoryId+ "&dir=desc&order=bestsellers";
    return this.http.get<ProductAPIResponse>(link).toPromise();
  }

  getProductsSorted(categoryId:string, sortFilter: SortingFilter):Promise<ProductAPIResponse>{
    let link = this.route + this.productRouteService.elaboratePath(categoryId,sortFilter);
      return this.http.get<ProductAPIResponse>(link).toPromise();
  }

  getProductsFiltered(categoryId:string, filters: any):Promise<ProductAPIResponse>{
    let link = this.route + this.productRouteService.elaboratePath(categoryId, undefined,  filters);
    return this.http.get<ProductAPIResponse>(link).toPromise();
  }

  getProductsFilteredAndSorted(categoryId:string, filters:any, sortFilter: SortingFilter):Promise<ProductAPIResponse>{
    let link = this.route + this.productRouteService.elaboratePath(categoryId, sortFilter, filters);
    return this.http.get<ProductAPIResponse>(link).toPromise();
  }


  getProductByScanCode(sku:string): Promise<Product>{
    let link = "https://private-anon-3d7fb26c9f-gocco.apiary-mock.com/stores/1/products?scan_code="+sku;
    return this.http.get<Product>(link).toPromise();

  }
}