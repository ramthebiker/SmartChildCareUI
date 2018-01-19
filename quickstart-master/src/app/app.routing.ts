import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ChildInfoComponent} from './components/childinfo.comp';
import {HomeComponent} from './components/home.comp';


const appRoutes: Routes = 
[ 
    {
        path:'',
        component: HomeComponent
    },
    {
         path:'childinfo',
        component: ChildInfoComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);