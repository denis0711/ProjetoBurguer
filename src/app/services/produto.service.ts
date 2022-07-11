import { Injectable } from '@angular/core';
import { Produto } from '../Produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

 private apiUrl = 'https://localhost:44361/api/Produto'
  constructor(private http: HttpClient) { }

//https://localhost:44361/api/Produto?page=1&pageValue=5

  get(): Observable<Produto[]>{
    return  this.http.get<Produto[]>(this.apiUrl)
  }


  getProdutoCategoria(categoria:string): Observable<Produto[]>{
    return  this.http.get<Produto[]>(this.apiUrl+'?Categoria='+categoria)
  }
}
