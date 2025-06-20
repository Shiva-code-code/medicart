import { RouterModule, Routes } from '@angular/router';
import { Shop } from './components/shop/shop';
import { Home } from './components/home/home';
import { ItemDetails } from './components/item-details/item-details';
import { Cart } from './components/cart/cart';


export const routes: Routes = [
    {path:'',component:Home},
    {path:'shop',component:Shop},
    {path:'product/:id',component:ItemDetails},
    {path:'cart',component:Cart},
    { path: '', redirectTo: '/shop', pathMatch: 'full' }
];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
export class AppRoutingModule {}