import { CategoryComponent } from "../pages/category/category.component";

export class Category {
    name: string;
    categoryId: string;
    children: Category[];
    imageURL?: string;
    route?:string;
}

export const categoryRoutes = [
    {name: 'Primera puesta', path: "primera-puesta", component: CategoryComponent, children: [
       { path: ':subcategory', component: CategoryComponent}
    ]},
    {name: 'Bebé', path: "bebe", component: CategoryComponent},
    {name: 'Niño', path: "nino", component: CategoryComponent},
    {name: 'Niña', path: "nina", component: CategoryComponent},
    {name: "Junior Niño",path:"junior-nino", component: CategoryComponent},
    {name: "Junior Niña",path:"junior-nina", component: CategoryComponent}
];