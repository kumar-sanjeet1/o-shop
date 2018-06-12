import { AngularFireDatabase } from 'angularfire2/database';
import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Subscribe } from '@firebase/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
products = [];
subscription: Subscription;
filtredproducts = [];

  constructor(private productService: ProductService,
  private db: AngularFireDatabase) {
    // this.products = productService.getAllProducts();
   }


  ngOnInit() {
  this.subscription = this.productService.getProducts()
      .subscribe(products =>  this.filtredproducts = this.products = products);
  }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


    filter(query) {
      this.filtredproducts = (query) ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;
    }
}
