import { Injectable } from '@angular/core';
import { SortingFilter } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductRouteService {

  constructor() { }
  elaboratePath(categoryId:string, sortFilter?:SortingFilter, filters?: any, ):string{
    let link = "?category_id="+categoryId+'&';
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
    console.log(link);
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
}
