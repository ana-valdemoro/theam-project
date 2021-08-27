import { Component, Input, OnInit } from '@angular/core';
import { CategoryProducts } from 'src/app/models/product';
import { ProductsFacade } from '../../facade/products.facade';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryProducts: CategoryProducts;
  constructor(private productsFacade: ProductsFacade) { }

  ngOnInit(): void {
    this.productsFacade.getProductsCategory().subscribe(products => this.categoryProducts = products)
  }


}
