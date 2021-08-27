import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
    providedIn: 'root'
  })
export class NavbarState{
    private category$ = new BehaviorSubject<Category>(null);
    
    constructor(){}

    setCategory(newCategory: Category) {
      this.category$.next(newCategory);
    }
    getCategory():Observable<Category> {
      return this.category$.asObservable();
    }

}
