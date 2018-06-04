import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-editar',
  templateUrl: './pedido-editar.component.html',
  styleUrls: ['./pedido-editar.component.css']
})
export class PedidoEditarComponent implements OnInit {

  pedido = {quantidade:0, produtoId: 0, id: null};
  produtoLista = [];
  sucesso = false;
  deletado = false;

  constructor(
    public http: HttpClient,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(item => this.http.post('http://localhost:8080/pedidos/test',{id: item.id}).subscribe((response: {quantidade:0, produtoId: 0, id: null}) => {
      this.pedido = response;
    }));    
    this.http.get('http://localhost:8080/products/all').subscribe((resposta: any[]) => {
      this.produtoLista = resposta;      
    })
  }

  salvar() {    
    this.http.post('http://localhost:8080/pedidos', this.pedido).subscribe((response) => {
      this.sucesso = true;
    })
  }

  deletar() {
    this.http.post('http://localhost:8080/pedidos/deletar', {id: this.pedido.id}).subscribe((response) => {
      this.deletado = true;
    })
  }

  selecionarProduto(produto) {
    this.pedido.produtoId = produto.id;
  }

}
