import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

import { HttpClientModule } from '@angular/common/http'
import {OrderListModule} from 'primeng/orderlist';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    ListRenderComponent
    
  ],
  imports: [
    BrowserModule, HttpClientModule,OrderListModule,DataViewModule,DropdownModule,FormsModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
