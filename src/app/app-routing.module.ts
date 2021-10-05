import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  
  { path: 'customer', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {
    path: 'login',component: LoginComponent   
  },
  {
    path: '',component: LoginComponent   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
