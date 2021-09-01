import { NgModule } from '@angular/core';
import { Routes, RouterModule , UrlSegment } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { categoryRoutes } from './models/category';
import { ProductComponent } from './pages/product/product.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {matcher: (url : UrlSegment[]) => {
    return url.length === 1 && url[0].path.match(/\w+.html/g)
    ? { consumed: url } 
    :  null;
  },component: ProductComponent}
];
categoryRoutes.forEach(element => {
  routes.push(element);
});
routes.push({path:"**",   component: ErrorComponent});
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
