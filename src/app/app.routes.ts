import { Routes } from '@angular/router';
import { MainComponents } from './components/main/main';
import { AboutComponents } from './components/about/about';

export const routes: Routes = [
    {
        path: '',
        component: MainComponents
    },
    {
        path: 'about',
        component: AboutComponents
    }
];
