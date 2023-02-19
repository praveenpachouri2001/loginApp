import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
path : 'login',
  component:LoginComponent,
  },
  {
  path : 'register',
  component:RegisterComponent,
  },
  {
    path : 'logout',
    component:LogoutComponent,
    },
  {
    path : '',
      component:HomeComponent,
      },
      {
        path : 'admin/dashboard',
          component:DashboardComponent,
          canActivate:[AuthGuard]
          },
          {
            path : 'user/dashboard',
              component:UserDashboardComponent,
              canActivate:[AuthGuard]
              }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
