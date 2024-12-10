import { Routes } from '@angular/router';
import Firstcomponent from './first/first.component';
import Childcomponent from './child/child.component';
import Homecomponent from './home/home.component';
import NotfoundComponent from './notfound/notfound.component';
import UserComponent from './user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: Homecomponent,
  },
  { path: 'first', component: Firstcomponent },
  { path: 'child', component: Childcomponent },
  { path: 'user/:id', component: UserComponent },
  { path: '**', component: NotfoundComponent },
];
