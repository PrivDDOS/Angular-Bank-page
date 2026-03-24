import { Routes } from '@angular/router';
import { MainComponents } from './components/main/main';
import { AboutComponents } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { BlogComponent } from './components/blog/blog';

export const routes: Routes = [
    {
        path: '',
        component: MainComponents
    },
    {
        path: 'about',
        component: AboutComponents
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    }
];
