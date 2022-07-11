import { Injectable } from '@angular/core';
import { Categoria } from '../Categoria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  private apiUrl = 'https://localhost:44361/api/Categoria'

  constructor(private http: HttpClient) { }

  get(): Observable<Categoria[]>{
    return  this.http.get<Categoria[]>(this.apiUrl)
  }
}
