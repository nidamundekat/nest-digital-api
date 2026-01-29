import { Routes } from '@angular/router';
import { Home } from './Ui/home/home';
import { Contact } from './Ui/contact/contact';
import { Product } from './Ui/product/product';
import { Singleview } from './Ui/singleview/singleview';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'contact' , component:Contact},
    {path:'product' , component:Product},
    {path:'singleview/:titileid', component:Singleview}

];
