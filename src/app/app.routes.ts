import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Products } from './products/products';
import { Contact } from './contact/contact';
import { Singlepage } from './singlepage/singlepage';


export const routes: Routes = [
       {
        path:"",component: Home
    },
    {
        path:"about",component: About
    },
    {
        path:"products",component: Products
    },
      {
        path:"contact",component: Contact
    },
    {
       path:"singlepage/:id",component: Singlepage
    }
    
];
