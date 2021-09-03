import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Filter, SortingFilter } from 'src/app/models/product';
import { CategoriesProvider } from 'src/app/providers/categories.provider';
import { FormGroup, FormBuilder, FormControl } from  '@angular/forms'; 

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
  filterForm : FormGroup;
  constructor(private categoriesProvider :CategoriesProvider, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.initializeForm();
    console.log(this.filterForm);
    this.filters.forEach(filter => {
      if(filter.label === "PRICE") {
        this.minPrice = filter.min;
        this.maxPrice = filter.max;
      }
    });
    if(this.category.name == "Primera puesta" || this.category.name == "Bebé") this.time = "meses";
    else this.time = "años";
    console.log(this.filters);
    this.initializeSortinFilter();
  }

  initializeSortinFilter(){
    this.categoriesProvider.getSortingFilters(this.category.categoryId)
    .then( sortingFilters => { 
      this.sortingFilters = sortingFilters;
    });
  }

  initializeForm() {
    let form = {};
    this.filters.forEach(filter => {
      form[filter.filterName] = this.initializeFilter(filter);
    });
    this.filterForm = this.formBuilder.group(form);
  }
  initializeFilter(filter: Filter): any{
    if(filter.label !== "PRICE" ){
      let filtercontrol = this.initializeControl(filter.options);
     return this.formBuilder.group(filtercontrol); 
    }else{
      let options = {};
      options['minPrice'] = filter.min;
      options['maxPrice'] = filter.max;
      return this.formBuilder.group(options);
    }
  }

  initializeControl(filterOption:any) {
    let object = {};
    filterOption.forEach(element => {
      object[element.label] = false;
    });
    return object;
  }

  onApplyFilters(){
    console.log(this.filterForm);
  }
  onNotifyClosure(){
    this.closeEmitter.emit(true);
  }
}
