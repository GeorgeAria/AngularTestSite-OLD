import { Component, OnInit } from '@angular/core';

//"ActivatedRoute" is needed to read parameter values from the URL.

import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  //We need an instance of the ActivatedRoute service to use it in our code.
  //We need an instance of the Router service to create a back button for this component.

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    //"param" get the desired parameter from the URL. This value is initially a string.
    //You use "snapshot" if you only need to get the initial value of the parameter.
    //If the value is going to change without leaving the page, use an observable instead.
    //For example, if there was a "next product" button, you'd use an observable.

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {

      //The "+" sign in front of "param" converts the string value into a numeric ID.

      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
