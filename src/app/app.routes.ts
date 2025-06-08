import { mapToCanActivate, Routes } from '@angular/router';
import { AptitudeComponent } from './components/aptitude/aptitude.component';
import { HomeComponent } from './components/home/home.component';
import { ScoreComponent } from './components/score/score.component';
import { PpeComponent } from './components/ppe/ppe.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
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
    ,{
        path:'editor',
        component: BlogComponent
    }
    ,
        ],
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    },
       
    {
        path:'',
        component: AuthLayoutComponent,
        children: [
            {
                path:'login',
                component: LoginComponent
                
            },{
                path:'signup',
                component: SignupComponent
            }
        ]
    }
];
