import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Comments } from './comments-data';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CommentsDataService 
{
  private commentsUrl = 'assets/products/comments.json';

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comments[]> {

    console.log("Testing 1,2,3 ...");
    return this.http.get<Comments[]>(this.commentsUrl)

    //.pipe allows us to string together functional operators into a chain.

      .pipe(
        
    //.tap allows us to perform actions on data, but it can not modify it in any way.

        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
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
