import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CheeseDetailComponent } from './cheese-detail/cheese-detail.component';
import { CheeseComponent } from './cheese/cheese.component';
import { CheeseService } from './cheese.service';

@NgModule({
  declarations: [
    AppComponent,
    CheeseDetailComponent,
    CheeseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CheeseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
