import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductAPIResponse, SortingFilter} from '../models/product';

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

  getProductsSorted(categoryId:string, sortFilter: SortingFilter):Promise<ProductAPIResponse>{
    let link = this.elaboratePath(categoryId,sortFilter);
      return this.http.get<ProductAPIResponse>(link).toPromise();
  }

  getProductsFiltered(categoryId:string, filters: any):Promise<ProductAPIResponse>{
    let link = this.elaboratePath(categoryId, undefined,  filters);
    return this.http.get<ProductAPIResponse>(link).toPromise();
  }

  getProductsFilteredAndSorted(categoryId:string, filters:any, sortFilter: SortingFilter):Promise<ProductAPIResponse>{
    let link = this.elaboratePath(categoryId, sortFilter, filters);
    return this.http.get<ProductAPIResponse>(link).toPromise();
  }
  elaboratePath(categoryId:string, sortFilter?:SortingFilter, filters?: any, ):string{
    let link = this.route + "?category_id="+categoryId+'&';
    if(sortFilter != undefined) link += "order=" +sortFilter.order + "&dir=" + sortFilter.direction +'&';
    if(filters != undefined){
      for(let key in filters){
        if(key != "price" && filters[key].length!=0){
          link += this.elaborateSubFilterPath(key, filters[key]);
        }else if(key == "price"){
          link += this.elaboratePricePath(key, filters[key]);
        }
      }
    }  
    let lastIndex = link.lastIndexOf('&');
    if(lastIndex != -1 && lastIndex == link.length-1 ) link = link.substring(0,lastIndex);
    return link;
  }
  elaboratePricePath(key:string, filter:any):string{
    let filterRoute ="" ;
    if(filter.hasOwnProperty('min')) filterRoute += `filters[price][min]=`+filter.min+'&';
    if(filter.hasOwnProperty('max')) filterRoute+= `filters[price][max]=`+filter.max;
    return filterRoute;
  }
  elaborateSubFilterPath(key:string, filter:any):string{
    let filterRoute ="" ;
    filter.forEach(id => {
      filterRoute += `filters[${key}][]=`+id+'&'; 
    });
    return filterRoute;
  }

  getProductByScanCode(sku:string): Promise<Product>{
    let link = "https://private-anon-3d7fb26c9f-gocco.apiary-mock.com/stores/1/products?scan_code="+sku;
    return this.http.get<Product>(link).toPromise();

  }
}