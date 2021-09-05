import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Filter, SortingFilter } from 'src/app/models/product';
import { CategoriesProvider } from 'src/app/providers/categories.provider';
import { FormGroup, FormBuilder, FormControl } from  '@angular/forms'; 
import { Router } from '@angular/router';

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
  filterForm : FormGroup;
  selectValue:string = 'Los más vendidos';
  filtersToBeApplied: any[] = [];
  constructor(private categoriesProvider :CategoriesProvider, private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit(): void {
    console.log(this.filters);
    this.initializeVariables();
    this.initializeForm();
    this.initializeGroupControlChanges();
    this.initializeSortinFilter();
  }
  initializeGroupControlChanges() {
    this.filters.forEach(filter => {
      if(filter.label !== "PRICE"){
        this.initializeFilterControlChanges(filter);
      }else{
        this.initializePriceFilterControlChanges(filter);
      }
    });
  }

  initializePriceFilterControlChanges(filter:Filter){
    this.minPrice.valueChanges.subscribe(value =>{  
      this.filtersToBeApplied[filter.filterName].min = value;
    });
    this.maxPrice.valueChanges.subscribe(value =>{
      this.filtersToBeApplied[filter.filterName].max = value
    });
  }

  
  initializeFilterControlChanges(filter: Filter) {
    filter.options.forEach(option => {
      this.filterForm.get(filter.filterName).get(option.label).valueChanges.subscribe(value => {
        if(value){
          this.filtersToBeApplied[filter.filterName].push(option.id);
          console.log(this.filtersToBeApplied);
        }else{
          this.deleteFilterToApply(filter.filterName, option.label);
        }
      });
    });
    
  }

  deleteFilterToApply(filterName:string, option:string){
    let index = this.filtersToBeApplied[filterName].indexOf(option);
    this.filtersToBeApplied[filterName].splice(index,1);
  }

  initializeVariables(){
    let mainRoute = this.router.url.split('/').filter(route => route !== '')[0];
    (mainRoute == "primera-puesta" || mainRoute == "bebe") ? this.time = "meses" : this.time = "años";
    this.initializeFilterToBeApplied();
  }
  initializeFilterToBeApplied(){
    this.filters.forEach(element => {
      this.filtersToBeApplied[element.filterName] = new Array();
    });
  }
  initializeSortinFilter(){
    this.categoriesProvider.getSortingFilters(this.category.categoryId)
    .then( sortingFilters => { 
      this.sortingFilters = sortingFilters;
    });
  }

  initializeForm():void {
    let form = {};
    this.filters.forEach(filter => {
      form[filter.filterName] = this.constituteFormGroup(filter);
    });
    this.filterForm = this.formBuilder.group(form);
  }
  constituteFormGroup(filter: Filter): any{
    if(filter.label !== "PRICE" ){
      let filtercontrol = this.constituteFormControls(filter.options);
      return this.formBuilder.group(filtercontrol); 
    }else{
      let options = {};
      options['minPrice'] = filter.min;
      options['maxPrice'] =  filter.max;
      return this.formBuilder.group(options);
    }
  }

  constituteFormControls(filterOption:any) {
    let object = {};
    filterOption.forEach(element => {
      object[element.label] = false;
    });
    return object;
  }
  get minPrice (){ return this.filterForm.get('price').get('minPrice')}
  get maxPrice (){ return this.filterForm.get('price').get('maxPrice')}

  onApplyFilters(){
    let sortingFilter  = this.sortingFilters.filter(filter => filter.name == this.selectValue);
    this.closeEmitter.emit({close:true, sortFilter: sortingFilter[0] });
  }
  onNotifyClosure(){
    this.closeEmitter.emit({close: true});
  }
}
