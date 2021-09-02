import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Filter, SortingFilter } from 'src/app/models/product';
import { CategoriesProvider } from 'src/app/providers/categories.provider';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent implements OnInit {
  @Output() closeEmitter = new EventEmitter<any>();
  @Input() filters : Filter[];
  @Input() category : Category;
  sortingFilters: SortingFilter[];
  time : string;
  minPrice:any;
  maxPrice:any;
  constructor(private categoriesProvider :CategoriesProvider) { }

  ngOnInit(): void {
    this.filters.forEach(filter => {
      if(filter.label === "PRICE") {
        this.minPrice = filter.min;
        this.maxPrice = filter.max;
      }
    });
    if(this.category.name == "Primera puesta" || this.category.name == "Bebé") this.time = "meses";
    else this.time = "años";
    console.log(this.filters);
    this.categoriesProvider.getSortingFilters(this.category.categoryId)
    .then( sortingFilters => { 
      this.sortingFilters = sortingFilters;
    });
    
  }
  onNotifyClosure(){
    this.closeEmitter.emit(true);
  }
}
