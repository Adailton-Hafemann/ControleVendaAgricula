import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedido = {quantidade:0, produtoId: 0, id: null}
  produtoLista = [];
  sucesso = false;

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/products/all').subscribe((resposta: any[]) => {
      this.produtoLista = resposta;      
    })
  }

  salvar() {
    this.pedido.id = null;
    this.http.post('http://localhost:8080/pedidos', this.pedido).subscribe((response) => {
      this.sucesso = true;
    })
  }

  selecionarProduto(produto) {
    this.pedido.produtoId = produto.id;
  }

}
