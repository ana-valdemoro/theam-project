import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }

  normalizePrice(product:Product):string{
    let price = product.originalPrice.toString();
    if(product.currency === 'EUR') return price.substring(0,2) + ','+ price.substring(2) +" €";
    return "0,00 €"
  }
}
