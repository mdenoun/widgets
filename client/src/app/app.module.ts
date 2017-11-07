import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VirtualScrollModule } from 'angular2-virtual-scroll';


import { AppComponent } from './app.component';
import {TableListComponent} from "./list/table-list.component";

@NgModule({
  declarations: [
    AppComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    VirtualScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
