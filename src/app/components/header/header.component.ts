import { Component, HostListener, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesProvider } from '../../providers/categories.provider';
import { CategoryState } from '../../State/Category.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentCategory: Category | undefined;
  categories: Category[]; 
  menuHover:boolean = false;
  isMobileSize:boolean = false;
  isOpenMobileBar:boolean = false;
  constructor(private categoriesProvider: CategoriesProvider, private navbarCategoryState: CategoryState) {}

  ngOnInit(): void {
    this.categoriesProvider.getCategoriesList().then(categories => {
      this.categories = categories;
    })
    this.checkMobileScreen();
  }


  checkDropdownVisibility(){
    if(this.menuHover == false ){
      this.currentCategory = undefined
    }
  }
  showSubCategories(index:number): void {
    this.currentCategory = this.categories[index];
  }


  saveCategoryState(category: Category| null){
    this.navbarCategoryState.setCategory(category);
  }
  
  @HostListener('window:resize', ['$event'])
  checkMobileScreen(event?){
    if(window.innerWidth < 856){
      this.isMobileSize = true;
    }else{
      this.isMobileSize = false;
    }  
  }
  getNotificationOfClosure(response:any){
    this.saveCategoryState(response.category);
    if(response.close === true) this.isOpenMobileBar = false;
  }
}
