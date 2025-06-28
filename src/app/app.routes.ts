import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Notfound } from '../components/notfound/notfound';

export const routes: Routes = [
    {path:'',component: Home},
    {path:'#',component: Home},
    {path:'**',component: Notfound, pathMatch:'full'}
];
