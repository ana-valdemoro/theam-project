import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { ProductAPIResponse, Product, SortingFilter } from 'src/app/models/product';
import { ProductsProvider } from 'src/app/providers/products.provider';
import { PriceService } from 'src/app/services/price.service';
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
  constructor(private categoryState: CategoryState, private productsProvider :ProductsProvider, private router: Router, private priceService: PriceService) { }

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
  onNavigateProductView(sku: string){
    const extras: NavigationExtras = {
      queryParams: {
          sku: sku
      }
  };
    this.router.navigate(['/product_detail'], extras);
  }
  openFilterModal(){
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }
  getPrice(product:Product):string{
    return this.priceService.normalizePrice(product);
  }
  getNotificationOfClosure(response:any){
    if(response.close == true) this.isFilterModalOpen = false;
    if (response.sortFilter != undefined && response.filter != undefined) this.getFilterAndSortProducts(response.filter, response.sortFilter) ;
    else if(response.filter != undefined) this.getFilterProduct(response.filter) ;
    else if(response.sortFilter != undefined) this.getSortProducts(response.sortFilter);
  }
  getFilterAndSortProducts(filter: any, sortFilter: SortingFilter ) {
    this.productsProvider.getProductsFilteredAndSorted(this.currentCategory.categoryId, filter, sortFilter)
      .then(products => {this.products = products});
  }
  getFilterProduct(filter: any) {
    this.productsProvider.getProductsFiltered(this.currentCategory.categoryId, filter)
    .then(products => {this.products = products});
  }

  getSortProducts(sortFilter: SortingFilter ){
    this.productsProvider.getProductsSorted(this.currentCategory.categoryId, sortFilter)
      .then(products => {this.products = products});
  }


}
