//This class is known as a "service".
//A service is set up to be a single instance by Angular, which can be called upon by a class as a dependency.
//This is called "Dependency Injection".

//This class allows us to access our JSON data from our api/products folder.
//In production, it would be used to get data from a backend service.
//It may also be better to put these types of data services in their own Angular module.

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct } from './product';

//"@Injectable" decorator tell Angular that this is a service.

@Injectable({
  //By setting the "providedIn" value to "root", we make this available to the root application injector.
  //This means that this service can be used throughout the application and not just the product-list component.

  providedIn: 'root'
})
export class ProductService {
  // If using Stackblitz, replace the url with this line
  // because Stackblitz can't find the api folder.
  // private productUrl = 'assets/products/products.json';


  //"productUrl" is the url to the data. This can be an API (web url) if you have one.

  private productUrl = 'api/products/products.json';

  //The constructor initializes an "HTTPClient" to help it communicate with a web server or a JSON file.

  constructor(private http: HttpClient) { }

  //"getProducts" will return data from a JSON file.
  //It will only be called when it is subscribed to, which is shown in the "product-list.component.ts" file.

  getProducts(): Observable<IProduct[]> {

    console.log("Testing 1,2,3 ...");
    return this.http.get<IProduct[]>(this.productUrl)

    //.pipe allows us to string together functional operators into a chain.

      .pipe(
        
    //.tap allows us to perform actions on data, but it can not modify it in any way.

        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
 
  //"getProduct" will return a specific product based a an ID value that it is given.
  //This is used by the "product-detail.component.ts" file to get a specific product.

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.productId === id))
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
