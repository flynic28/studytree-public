import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const restEndpoint = '';
const localEndpoint = 'assets/data/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private http: HttpClient
  ) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getResources(pageNumber): Observable<any> {
    if (localEndpoint) {
      return this.http.get(localEndpoint + 'resources.' + pageNumber + '.json');
    } else {
      return this.http.get(restEndpoint + 'resources').pipe(
        map(this.extractData));
      }
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
