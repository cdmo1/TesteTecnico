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
    dt_birth_products: null,
    cellphone_number_products: null
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

  createUser() {
    if(this.productUpdate){
      this.productsService.updateProduct(this.product).subscribe(//nao entendi o pq, pesquisei mas ainda assim nao entendi, e sobre a tabela products, ela ja estava criada, e atribui coisas nela, ontem sabe, entao mano, se vc puder me explicar, nao so isso na real, tupo pq vou ter que explicar a ele, se possivel, por favor, muito obrigado por tudo que tem feito por mim, mesmo!
        data => {
          this.router.navigate(['/products'])

        }
      );
    }
    else{
      this.productsService.createProduct(this.product).subscribe(
        data => {
            this.router.navigate(['/'])
        }
      );
    }
   
  }

  deleteUser(id_products) {
    this.productsService.deleteProduct(id_products).subscribe(
      data => {
        this.searchProducts();
      }
    );
  }
}