import { ProductService } from './../services/product.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
categories$;
  constructor(public categoryService: CategoryService, private productService: ProductService) {
    this.categories$ = categoryService.getCategories();
   categoryService.getCategories().subscribe((data) => console.log(data));
  }
    ngOnInit() {
    }

    saveData(productData) {
      this.productService.createData(productData);
    }
}
