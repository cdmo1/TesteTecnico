import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = "http://localhost/korpco/products/";

  constructor(private http: HttpClient) { }

  listProducts() {
    return this.http.get(`${this.URL}listProduct.php`);
  }

  createProduct(product) {
    return this.http.post(`${this.URL}createProduct.php`, JSON.stringify(product));
  }

  deleteProduct(id_products: number) {
    return this.http.get(`${this.URL}deleteProduct.php?id_products=${id_products}`);
  }
  
  updateProduct(product) {
    return this.http.post(`${this.URL}updateProduct.php`, JSON.stringify(product));
  }
}