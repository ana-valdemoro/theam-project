import { CategoryComponent } from "../pages/category/category.component";


export class Category {
    name: string;
    categoryId: string;
    children: Category[];
    imageURL?: string;
    route?:string;
}

export const categoryRoutes = [
    {name: 'Primera puesta', path: "primera-puesta", component: CategoryComponent},
    {name: 'Bebé', path: "bebe", component: CategoryComponent},
    {name: 'Niño-Niña', path: "infantil", component: CategoryComponent},
    {name: "Junior Niño-Junior Niña",path:"junior", component: CategoryComponent}
];