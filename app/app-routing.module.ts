import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const ROUTES: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
