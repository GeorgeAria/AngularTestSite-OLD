import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

//A lifecycle hook (like OnInit) allows us to perform certain actions during the lifecycle of an Angular application.
//OnInit is used to perform component initialization (setup) after it has set up its properties.
//It is best to use it to retrieve data from a backend source.
//To use a lifecycle hook, you must import it and implement it in the class.
//NOTE: Technically, you don't need to import it, but it is good practice to do so.
//You can then access its one method, which is the name of the interface prefixed with "ng" (e.g. ngOnInit).

export class ProductListComponent implements OnInit {
  
  //Properties within this class (template expression) like "pageTitle" can be used in the HTML template of this component.
  //See "product-list-component.html" for more details.

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  //"_listFilter" is a backing field that retains a set value from a setter.

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  //The constructor function is executed when the component is created.
  //The constructor is where we inject dependencies, like a service.
  //The private variable "productService" can be used as a variable in the class.

  constructor(private productService: ProductService) { }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }


  performFilter(filterBy: string): IProduct[] {
    //filterBy is set to lowercase so that we can compare apples-to-apples when it comes to the strings compared.
    //The array method filter() is used, and is passed an anonymous function.
    //For each product in the original "products" array, the name is set to lowercase.
    //"indexOf" is used to determine if string given by the user can be found in the product's name.
    //If it is, the product is added to the filtered list.

    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    //The "subscribe" method will execute the method of an observable.
    //In this case, it will execute the "getProducts()"" method of the productService.
    //It will then asynchronously receive data from the observable, kicking off the "next" function.

    this.productService.getProducts().subscribe({

      //"next" is the function/key that will process the next emitted value.
      //"products" is that emitted value.

      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },

      //"error" is the function/key that will process when an error occurs.

      error: err => this.errorMessage = err
    });
  }
}
