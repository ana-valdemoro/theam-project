import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewBornComponent } from './pages/new-born/new-born.component';
import { HomeComponent } from './pages/home/home.component';
import { BabyComponent } from './pages/baby/baby.component';
import { ChildrenComponent } from './pages/children/children.component';
import { JuniorComponent } from './pages/junior/junior.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "primera-puesta", component:NewBornComponent},
  {path: "bebe", component: BabyComponent},
  {path: "infantil", component: ChildrenComponent},
  {path:"junior", component: JuniorComponent},
  {path:"**",   component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
