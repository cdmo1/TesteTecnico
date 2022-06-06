import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = "http://localhost/korpco/products/";

  constructor(private http: HttpClient) { }

  listProducts() {
    return this.http.get(`${this.URL}list.php`);
  }

  createProduct(products) {
    return this.http.post(`${this.URL}create.php`, JSON.stringify(products));
  }

  deleteProduct(id_products: number) {
    return this.http.get(`${this.URL}delete.php?id_products=${id_products}`);
  }
  
}