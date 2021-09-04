import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsProvider } from 'src/app/providers/products.provider';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor( private route: ActivatedRoute, private productProvider: ProductsProvider ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.productProvider.getProductByScanCode(params.sku)
        .then(product => {
          this.product = product;
          console.log(this.product);
        });
      });

  }

}
