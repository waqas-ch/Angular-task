import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootNavComponent } from './root-nav/root-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TenderComponent } from './tender/tender.component';
import { ITBComponent } from './itb/itb.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { QuotationComponent } from './quotation/quotation.component';
@NgModule({
  declarations: [
    AppComponent,
    RootNavComponent,
    DashboardComponent,
    SettingsComponent,
    
    TenderComponent,
    ITBComponent,
    QuotationComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
   ReactiveFormsModule,
   MatInputModule,
   MatSelectModule
   
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
