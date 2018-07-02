import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estoque-lista',
  templateUrl: './estoque-lista.component.html',
  styleUrls: ['./estoque-lista.component.css']
})
export class EstoqueListaComponent implements OnInit {

  public estoque = [];
  public produtos = [];
  public estSelecionado = {};

  constructor() { }

  ngOnInit() {
    const produtosLista = window.localStorage.getItem('produtos');
    this.produtos = JSON.parse(produtosLista);
    const est = window.localStorage.getItem('estoque');
    this.estoque = JSON.parse(est);    
  }

  buscaProduto(produtoId) {
    const produto = this.produtos.find(ele => ele.id == produtoId);
    if (produto == undefined){
      return "";
    }    
    return produto.nome;
  }

  selecionaEstoque(est) {
    this.estSelecionado = est;
  }

}
