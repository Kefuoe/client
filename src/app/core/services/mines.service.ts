import { Injectable } from '@angular/core';

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
      baseUrl: string = 'http://localhost:5000/api';

      // Http Header
      httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
      constructor(private httpClient: HttpClient) {}


      GetMines(): Observable<any> {
        return this.httpClient.get<HttpResponse<any>>(this.baseUrl + "/mines");
      }

      GetMineId(id:number): Observable<any> {
        return this.httpClient.get<HttpResponse<any>>(this.baseUrl + "/mines/"+ id);
      }

      GetMineContact(id:number): Observable<any> {
        return this.httpClient.get<HttpResponse<any>>(this.baseUrl + "/mines/contacts/"+ id);
      }


}

