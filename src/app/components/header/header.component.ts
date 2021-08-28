import { Component, HostListener, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesProvider } from '../../providers/categories.provider';
import { categoryRoutes } from 'src/app/models/category';
import { NavbarState } from '../../State/navbarCategory.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentCategory: Category | undefined;
  categories: Category[]; 
  navHover:boolean = false;
  menuHover:boolean = false;
  isMobileSize:boolean = false;
  isOpenMobileBar:boolean = false;
  constructor(private categoriesProvider: CategoriesProvider, private navbarCategoryState: NavbarState) {}

  ngOnInit(): void {
    this.categoriesProvider.getCategoriesList().subscribe(values  =>{
      this.categories = values.map(category =>{;
        category.route = this.elaboratePath(category.name);
        return category;
      })
    });
    this.checkMobileScreen();
  }
  checkDropdownVisibility(){
    if(this.menuHover == false){
      this.currentCategory = undefined
    }
    this.navHover = false;
  }
  showSubCategories(index:number): void {
    this.currentCategory = this.categories[index];
  }

  categoryMouseOut() {
    if(this.navHover == false) this.currentCategory = undefined;
    this.menuHover = false;
  }
  private elaboratePath(labelCategory:string){
    let category = categoryRoutes.filter(category =>{
      if(labelCategory  == category.name || (category.name).includes(labelCategory)) return category
    });
    return '/'+ category[0].path;
  }

  saveNavbarState(category: Category| null){
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

}
