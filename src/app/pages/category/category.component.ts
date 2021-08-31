import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ProductAPIResponse, Product } from 'src/app/models/product';
import { ProductsProvider } from 'src/app/providers/products.provider';
import { ProductsFacade } from '../../facade/products.facade';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  currentCategory : Category;
  products: ProductAPIResponse;
  constructor(private productsFacade: ProductsFacade, private productsProvider :ProductsProvider) { }

  ngOnInit(): void {
    this.currentCategory = this.productsFacade.getCurrentCategory();
    this.productsProvider.getProductsByCategory(this.currentCategory.categoryId).subscribe(products => {
      this.products = products;
    });
  }

  openFilterSortMenu(){
    
  }
  normalizePrice(product:Product):string{
    let price = product.originalPrice.toString();
    if(product.currency === 'EUR') return price.substring(0,2) + ','+ price.substring(2) +" €";
    return "0,00 €"
  }


}
