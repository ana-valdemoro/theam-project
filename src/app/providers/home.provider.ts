import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from '../models/category';

@Injectable({
    providedIn: 'root'
  })
  export class HomeProvider {
    route:string = "https://private-anon-614dd69582-gocco.apiary-mock.com/stores/1/home";
    constructor(private http: HttpClient) { 
    }
    getHomeCategories(): Observable<any[]> {
      return this.http.get<any[]>(this.route);
    }
  
  
  }