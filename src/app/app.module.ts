import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheeseDetailComponent } from './cheese-detail/cheese-detail.component';
import { CheeseComponent } from './cheese/cheese.component';
import { CheeseService } from './services/cheese.service';

import { AppRoutingModule } from './app-routing.module';
import { CheeseSearchComponent } from './cheese-search/cheese-search.component';


@NgModule({
  declarations: [
    AppComponent,
    CheeseDetailComponent,
    CheeseComponent,
    DashboardComponent,
    CheeseSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ CheeseService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
