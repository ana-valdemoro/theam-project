import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";
import { CategoryProducts } from "../models/product";
import { ProductsProvider } from "../providers/products.provider";
import { NavbarState } from '../State/navbarCategory.state';

@Injectable({
    providedIn: 'root'
  })
  export class ProductsFacade {
    private currentCategoryObservable: Observable<Category>;
    private currentCategory : Category;
    constructor(private navCategoryState: NavbarState, private productsProvider :ProductsProvider){
      this.currentCategoryObservable = this.navCategoryState.getCategory();
      this.currentCategoryObservable.subscribe( category =>{
        this.currentCategory = category;
      } );
    }

    getProductsCategory():Observable<CategoryProducts>{
      return this.productsProvider.getProductsByCategory(this.currentCategory.categoryId);
    }




  }