import { Routes } from '@angular/router';
import { Home } from '../components/page-components/home-page/main/home/home';
import { Error } from '../components/page-components/error-page/main/error/error';

export const routes: Routes = [
    {path:'',component: Home},
    {path:'#',component: Home},
    {path:'**',component: Error, pathMatch:'full'}
];
