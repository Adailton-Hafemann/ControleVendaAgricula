import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  listaProduto = [];  

  constructor() {
    this.listaProduto.push({
      id: 1,
      nome: 'Arroz',
      tipo: 'normal',
      valor: '200'
    });
   }

  getListaProduto(): Observable<any> {
    return of(this.listaProduto);    
  }

  getProduto(id): Observable<any> {
    return of(this.listaProduto.find((item) => item.id === id));
  }

  insert(produto: any): Observable<boolean> {
    produto.id = this.listaProduto.length + 1;
    this.listaProduto.push(produto);
    return of(true);
  }
}
