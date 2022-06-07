import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = null as any;
  product = {
    id_products: null,
    name_products: null,
    quantity_products: null,
    price_products: null
  }
  productUpdate = false;



  constructor(private productsService:  ProductsService, private router: Router) { }

  ngOnInit() {
    this.searchProducts();
  }

  searchProducts() {
    this.productsService.listProducts().subscribe(
      result => this.products = result    );
  }

  searchRegisters() {
    if(this.products == null) {
      return false;
    } else {
      return true;
    }
  }

  actionUpdate(products){
    this.productUpdate = !this.productUpdate;
    console.log(this.productUpdate);
  }

  createProduct() {
    if(this.productUpdate){
      this.productsService.updateProduct(this.product).subscribe(
        data => {
          window.location.reload();
        }
      );
    }
    else{
      this.productsService.createProduct(this.product).subscribe(
        data => {
          window.location.reload();
        }
      );
    }
   
  }

  deleteProduct(id_products) {
    this.productsService.deleteProduct(id_products).subscribe(
      data => {
        this.searchProducts();
      }
    );
  }
}