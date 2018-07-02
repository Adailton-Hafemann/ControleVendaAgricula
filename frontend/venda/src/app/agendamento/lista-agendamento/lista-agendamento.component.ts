import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-agendamento',
  templateUrl: './lista-agendamento.component.html',
  styleUrls: ['./lista-agendamento.component.css']
})
export class ListaAgendamentoComponent implements OnInit {

  public agendamentos = [];
  public produtos = [];

  constructor() { }

  ngOnInit() {
    const produtosLista = window.localStorage.getItem('produtos');
    this.produtos = JSON.parse(produtosLista);
    const agen = window.localStorage.getItem('agendamentos');
    this.agendamentos = JSON.parse(agen);    
    if (this.agendamentos == undefined) {
      this.agendamentos = [];
    }
  }

  buscaProduto(produtoId) {
    const produto = this.produtos.find(ele => ele.id == produtoId);
    if (produto == undefined){
      return "";
    }    
    return produto.nome;
  }

}
