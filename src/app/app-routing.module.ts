import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBornComponent } from './pages/new-born/new-born.component';
import { HomeComponent } from './pages/home/home.component';
import { BabyComponent } from './pages/baby/baby.component';
import { ChildrenComponent } from './pages/children/children.component';
import { JuniorComponent } from './pages/junior/junior.component';
import { ErrorComponent } from './components/error/error.component';
import {categoryRoutes} from './models/category';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
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
