import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";
import { CategoryState } from '../State/Category.state';

@Injectable({
    providedIn: 'root'
  })
  export class ProductsFacade {
    private currentCategoryObservable: Observable<Category>;
    private currentCategory : Category;
    constructor(private navCategoryState: CategoryState){
      this.currentCategoryObservable = this.navCategoryState.getCategory();
      this.currentCategoryObservable.subscribe( category =>{
        this.currentCategory = category;
      } );
    }

    getCurrentCategory(){
      return this.currentCategory;
    }



  }