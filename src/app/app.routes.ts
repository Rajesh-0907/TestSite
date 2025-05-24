import { Routes } from '@angular/router';
import { AptitudeComponent } from './components/aptitude/aptitude.component';
import { HomeComponent } from './components/home/home.component';
import { ScoreComponent } from './components/score/score.component';
import { PpeComponent } from './components/ppe/ppe.component';

export const routes: Routes = [
        {
            path:'',
            component: HomeComponent
        },
    {
    path:'aptitude',
    component: AptitudeComponent
    },
      {
    path:'ppe',
    component: PpeComponent
    },

    {
        path:'score',
        component: ScoreComponent
    }
];
