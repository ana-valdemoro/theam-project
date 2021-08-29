import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BabyComponent } from './pages/baby/baby.component';
import { NewBornComponent } from './pages/new-born/new-born.component';
import { ChildrenComponent } from './pages/children/children.component';
import { JuniorComponent } from './pages/junior/junior.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryComponent } from './pages/category/category.component';
import { MobileNavItemComponent } from './components/mobile-nav-item/mobile-nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent ,
    BabyComponent,
    NewBornComponent,
    ChildrenComponent,
    JuniorComponent,
    ErrorComponent,
    CategoryComponent,
    MobileNavItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
