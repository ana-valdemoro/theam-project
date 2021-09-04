import { NgModule } from '@angular/core';
import { Routes, RouterModule , UrlSegment } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { categoryRoutes } from './models/category';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "product_detail",component: ProductDetailComponent}
];
categoryRoutes.forEach(element => {
  routes.push(element);
});
routes.push({path:"**",   component: ErrorComponent});
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
