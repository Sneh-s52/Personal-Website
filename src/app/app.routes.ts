import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    // {
    //     path : 'blogs',
    //     component: BlogComponent
    // },
    {
        path: 'experience',
        loadComponent: () => import('./experience/experience.component').then(m => m.ExperienceComponent),
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
    },
];
