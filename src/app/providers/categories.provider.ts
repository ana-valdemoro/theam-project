import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesProvider {
  private readonly route: string = 'https://private-anon-9f830e58b1-gocco.apiary-mock.com/stores/1/categories' ; 
  constructor(private http: HttpClient) { 
  }
  getCategoriesList(): Observable<Category[]> {
    return this.http.get<any>(this.route);
  }


}