import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ProductAPIResponse, Product, SortingFilter } from 'src/app/models/product';
import { ProductsProvider } from 'src/app/providers/products.provider';
import { CategoryState } from 'src/app/State/Category.state';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy{
  currentCategory : Category;
  currentCategorySubscription: Subscription ;
  products: ProductAPIResponse;
  isFilterModalOpen:boolean = false;
  constructor(private categoryState: CategoryState, private productsProvider :ProductsProvider) { }

  ngOnInit(): void {
    this.currentCategorySubscription =  this.categoryState.getCategory().subscribe(category =>{
      if(category != null){
        this.currentCategory = category;
        this.productsProvider.getProductsByCategory(this.currentCategory.categoryId).then( products => this.products = products)
      }
    });
  }

  ngOnDestroy(): void {
    this.currentCategorySubscription.unsubscribe();
  }

  openFilterModal(){
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }
  normalizePrice(product:Product):string{
    let price = product.originalPrice.toString();
    if(product.currency === 'EUR') return price.substring(0,2) + ','+ price.substring(2) +" €";
    return "0,00 €"
  }
  getNotificationOfClosure(response:any){
    if(response.close == true) this.isFilterModalOpen = false;
    if(response.sortFilter != undefined) this.getSortProducts(response.sortFilter);
  }

  getSortProducts(sortFilter: SortingFilter ){
    this.productsProvider.getProductsByCategoryAndOrdered(this.currentCategory.categoryId, sortFilter)
      .then(products => {this.products = products});
  }


}
