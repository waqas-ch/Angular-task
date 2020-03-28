import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TenderComponent } from './tender/tender.component';
import { ITBComponent } from './itb/itb.component';
import { QuotationComponent } from './quotation/quotation.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'settings',
    component:SettingsComponent
  },
  {
    path:'tender',
    component:TenderComponent
  } ,
   {
    path:'itb',
    component:ITBComponent
  },
  {
    path:'quotation',
    component:QuotationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
