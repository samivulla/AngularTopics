import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularTopicsComponent } from '../components/angular-topics/angular-topics.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FormsComponent } from '../components/forms/forms.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forum', component: FormsComponent },
  { path: 'topics', component: AngularTopicsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
