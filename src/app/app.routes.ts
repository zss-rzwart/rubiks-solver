import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { Notation } from './pages/notation';
import { Beginner3x3 } from './pages/beginner-3x3';
import { Beginner2x2 } from './pages/beginner-2x2';
import { ComingSoon } from './pages/coming-soon';

export const routes: Routes = [
  { path: '', component: Home, title: "Rubik's Solver" },
  { path: 'notation', component: Notation, title: 'Notation' },
  { path: 'beginner-3x3', component: Beginner3x3, title: 'Beginner 3x3' },
  { path: 'beginner-2x2', component: Beginner2x2, title: 'Beginner 2x2' },
  {
    path: 'intermediate',
    component: ComingSoon,
    title: 'Intermediate',
    data: { title: 'Intermediate', plan: 'Planned: a first look at F2L, 2-look OLL and PLL.' },
  },
  {
    path: 'advanced',
    component: ComingSoon,
    title: 'Advanced',
    data: { title: 'Advanced', plan: 'Planned: full OLL/PLL and advanced F2L techniques.' },
  },
  { path: '**', redirectTo: '' },
];
