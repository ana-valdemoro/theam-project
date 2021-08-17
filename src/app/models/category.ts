import { BabyComponent } from "../pages/baby/baby.component";
import { ChildrenComponent } from "../pages/children/children.component";
import { HomeComponent } from "../pages/home/home.component";
import { JuniorComponent } from "../pages/junior/junior.component";
import { NewBornComponent } from "../pages/new-born/new-born.component";

export class Category {
    name: string;
    categoryId: string;
    children: Category[];
    imageURL?: string;
    route?:string;
}

export const categoryRoutes = [
    {name: 'Primera puesta', path: "primera-puesta", component:NewBornComponent},
    {name: 'Bebé', path: "bebe", component: BabyComponent},
    {name: 'Niño-Niña', path: "infantil", component: ChildrenComponent},
    {name: "Junior Niño-Junior Niña",path:"Junior", component: JuniorComponent}
];