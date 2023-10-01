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
export class ProductionFiguresService {

  baseUrl: string = 'http://localhost:5000/api';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  GetProductionMaterial(material:string): Observable<any> {
    console.log("do we go in here")
    return this.httpClient.get<HttpResponse<any>>(this.baseUrl + "/figures/"+ material);
  }
  
  GetProductionById(id:number): Observable<any> {
    console.log("do we go in here")
    return this.httpClient.get<HttpResponse<any>>(this.baseUrl + "/figures/material/"+ id);   
  }
}
