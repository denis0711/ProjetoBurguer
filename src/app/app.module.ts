import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

import { HttpClientModule } from '@angular/common/http'
import {OrderListModule} from 'primeng/orderlist';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidoComponent } from './components/pedido/pedido.component';



@NgModule({
  declarations: [
    AppComponent,
    ListRenderComponent,
    PedidoComponent
    
  ],
  imports: [
    BrowserModule, HttpClientModule,OrderListModule,DataViewModule,DropdownModule,FormsModule,NgxPaginationModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
