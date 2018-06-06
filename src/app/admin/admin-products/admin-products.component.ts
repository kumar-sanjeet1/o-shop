import { AngularFireDatabase } from 'angularfire2/database';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
products$ = [];
  constructor(private productService: ProductService,
  private db: AngularFireDatabase) {
    // this.products$ = productService.getAllProducts();
   }


  ngOnInit() {
  this.productService.getProducts()
      .subscribe(items => {
        return items.map(item => {
          this.products$.push(item);
          console.log(this.products$);
        });
      });
    }

}
