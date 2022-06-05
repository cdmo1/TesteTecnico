import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapType } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  title = 'angulardatatables';
  
  data = [];
  constructor(private http: HttpClient) {
    this.http.get('http://localhost/korpco/list.php').subscribe(data => {
    
   
    
    }, error => console.error(error));
  }
  
  ngOnInit() {

}
}