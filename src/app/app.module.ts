import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheeseDetailComponent } from './cheese-detail/cheese-detail.component';
import { CheeseComponent } from './cheese/cheese.component';
import { CheeseService } from './cheese.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CheeseDetailComponent,
    CheeseComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ CheeseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
