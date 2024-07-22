import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient ) { } //1:15

  //getProdutos(): Observable <any>{//1:16 não digitar codigo manualmente aceitar sugestão .
  getProdutos(): Observable <any>{
    return this.httpClient.get("http://localhost:3000/produtos")
  }
}
