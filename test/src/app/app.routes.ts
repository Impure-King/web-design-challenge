import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
export const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    title: "Home Page",
  },
  {
    path: "home",
    component: HomePageComponent,
    title: "Home Page",
  },
  {
    path: "#projects",
    component: HomePageComponent,
    title: "Projects",
  },
];
