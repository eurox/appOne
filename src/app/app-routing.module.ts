import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DemosComponent } from './demos/demos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/profile',  data: {animation: 'ProfilePage'} },
  { path: 'profile', component:  PersonalInfoComponent,  data: {animation: 'ProfilePage'}},
  { path: 'demos', component:  DemosComponent,  data: {animation: 'DemosPage'}},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
