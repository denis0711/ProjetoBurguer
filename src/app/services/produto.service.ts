import { Injectable } from '@angular/core';
import { Produto } from '../Produto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../Pedido';

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

  private apiPostPedidoUrl = 'https://localhost:44361/api/Pedido'

  CriarPedido(formData:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiPostPedidoUrl, formData)
  }

  private apiGetPedidoUrl = 'https://localhost:44361/api/Pedido'

  MostrarPedido(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.apiGetPedidoUrl)

  }
  getProdutoCategoria(categoria:string): Observable<Produto[]>{
    return  this.http.get<Produto[]>(this.apiUrl+'?Categoria='+categoria)
  }
}
