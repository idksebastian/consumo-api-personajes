import { Routes } from '@angular/router';

import { RickListComponent } from './pages/rick-list/rick-list';
import { RickDetailComponent } from './pages/rick-detail/rick-detail';

import { SimpsonsListComponent } from './pages/simpsons-list/simpsons-list';
import { SimpsonsDetailComponent } from './pages/simpsons-detail/simpsons-detail';

import { DragonListComponent } from './pages/dragon-list/dragon-list';
import { DragonDetailComponent } from './pages/dragon-detail/dragon-detail';

export const routes: Routes = [
  { path: 'rick', component: RickListComponent },
  { path: 'rick/:id', component: RickDetailComponent },

  { path: 'simpsons', component: SimpsonsListComponent },
  { path: 'simpsons/:id', component: SimpsonsDetailComponent },

  { path: 'dragon', component: DragonListComponent },
  { path: 'dragon/:id', component: DragonDetailComponent },

  { path: '**', redirectTo: 'rick' }
];