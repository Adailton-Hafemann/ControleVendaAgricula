import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

  listaPedido = [];
  produtoLista = [];

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/pedidos/all').subscribe((resposta: any[]) => {
      this.listaPedido = resposta;      
    });
    this.http.get('http://localhost:8080/products/all').subscribe((resposta: any[]) => {
      this.produtoLista = resposta;      
    })
  }

  selecionarProduto(pedido) {
    return  this.produtoLista.find(el => el.id === pedido.produtoId);    
  }

}
