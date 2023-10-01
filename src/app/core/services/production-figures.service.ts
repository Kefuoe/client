import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductionFiguresService {

  private baseUrl = environment.config.api.baseurl

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  GetProductionMaterial(material:string): Observable<any> {
    console.log("do we go in here")
    return this.httpClient.get<HttpResponse<any>>(this.baseUrl + "/figures/"+ material);
  }
  
  GetProductionById(id:number): Observable<any> {
    return this.httpClient.get<HttpResponse<any>>(this.baseUrl + "/figures/material/"+ id);   
  }
  GetProductionFiguresFilter(fromDate?:string, toDate?:string): Observable<any> {
  let params = new HttpParams();

  if(fromDate){
    params = params.set('fromYear',fromDate);
  }

  if(toDate){
    params = params.set('toYear',toDate);
  }
    return this.httpClient.get<HttpResponse<any>>(this.baseUrl +"/figures/", {params});   
  }
}
