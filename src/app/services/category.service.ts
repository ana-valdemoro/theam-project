import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public normalizeCategoryData(categories:Category[]){
    categories.forEach(category => {
      if(category.children.length == 0)  category.route = this.elaborateCategoryPath(category.name);
      else {
        category.route = this.elaborateCategoryPath(category.name);
        this.normalizeCategoryData(category.children);
      }
    });
  }

  private elaborateCategoryPath(categoryName:string):string{
    let category;
    if (categoryName.indexOf('-') === (-1)){
      category = this.replaceWhiteSpacesWithDash(categoryName);
    }else{
      category = this.removeWhiteSpaces(categoryName);
    }
    return this.normalizeToUnicode(category).toLowerCase();
  }
  private removeWhiteSpaces(category:string){
    return category.replace( / /g, '');
  }
  private replaceWhiteSpacesWithDash(category:string){
    return category.replace( / /g, '-');
  }
  private normalizeToUnicode(category:string){
    return category.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  }
}
