import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryComponent } from './pages/category/category.component';
import { MobileNavItemComponent } from './components/mobile-nav-item/mobile-nav-item.component';
import { ProductComponent } from './pages/product/product.component';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent ,
    ErrorComponent,
    CategoryComponent,
    MobileNavItemComponent,
    ProductComponent,
    FilterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
