import { Injectable } from '@angular/core';

import {MineList } from 'src/app/core/interfaces/mine-list';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class MinesService {
      // Node/Express API
      REST_API: string = 'http://localhost:5000/mines';

      // Http Header
      httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      constructor(private httpClient: HttpClient) {}

      // Get single object
      // GetMines() {
      //   console.log("res is",this.httpClient.get(`${this.REST_API}`))
      //   return this.httpClient.get(`${this.REST_API}`);
      // }


      GetMines(): Observable<any> {
        console.log("do we go in here")
        return this.httpClient.get<HttpResponse<any>>(`${this.REST_API}`);
      }
  // Error
  // handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Handle client error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Handle server error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //     errorMessage;
  //   });
  // }
}

