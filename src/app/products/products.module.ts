import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products.component';
import { ProductsService } from '../services/products.service';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    ProductsComponent
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [ProductsComponent]
})
export class ProductsModule { }
