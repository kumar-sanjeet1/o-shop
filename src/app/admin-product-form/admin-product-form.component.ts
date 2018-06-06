import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
categories$;
product = {};
id;
  constructor(public categoryService: CategoryService,
     private productService: ProductService,
     private router: Router,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
  }

    ngOnInit() {

      if (this.id) { this.productService.getProduct(this.id).pipe(take(1)).subscribe((product) => {
        this.product = product;
        console.log(product);
       });
      }
    }

    saveData(productData: Object) {
      if (this.id) {
        this.productService.updateProduct(this.id, productData);
      } else {
        this.productService.createData(productData);
      }

      this.router.navigate(['/admin/products']);
      console.log(productData);
    }
    onChange(t) {
      console.log(t);
    }

    delete() {
      if (!confirm('Are you sure')) { return; }
      this.productService.deleteProduct(this.id);
      this.router.navigate(['/admin/products']);
    }

}
