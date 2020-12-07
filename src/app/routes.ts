import { Routes } from '@angular/router'
import { LastComponent } from './last/last.component';
import { WeatherComponent } from './weather/weather.component';

export const allAppRoutes: Routes = [
  { path: 'weer/:stad', component: WeatherComponent },
  { path: 'lastV', component: LastComponent }
];