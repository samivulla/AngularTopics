import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { FormsComponent } from '../components/forms/forms.component';
import { AngularTopicsComponent } from '../components/angular-topics/angular-topics.component';


@NgModule({
  declarations: [
    CustomersComponent,
    DashboardComponent,
    FormsComponent,
    AngularTopicsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
