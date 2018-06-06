import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  createData(productData) {
    return this.db.list('/products').push(productData);
  }

  // getAllProducts = () => this.db.list('/products').valueChanges();
  getProducts() {
    return this.db.list('/products').snapshotChanges().pipe(
      map(actions =>
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    );
  }

  getProduct(id) {
    return this.db.object('/products/' + id).valueChanges();
  }

  updateProduct(id, product) {
    return this.db.object('/products/' + id).update(product);
  }

  deleteProduct(id) {
    return this.db.object('/products/' + id).remove();
  }
}
