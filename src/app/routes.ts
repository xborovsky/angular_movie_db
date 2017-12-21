import { Routes } from '@angular/router'; 

import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';

export const routes:Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'movie/:id', component: DetailComponent }
];
