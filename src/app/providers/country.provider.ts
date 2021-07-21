import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryProvider {

  constructor(private http: HttpClient) { 
  }
//   getCountriesList(): Observable<CashflowCategory[]> {
//     return this.http.get<CashflowCategory[]>(this.API);
//   }


}