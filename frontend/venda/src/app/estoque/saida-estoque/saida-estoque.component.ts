import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saida-estoque',
  templateUrl: './saida-estoque.component.html',
  styleUrls: ['./saida-estoque.component.css']
})
export class SaidaEstoqueComponent implements OnInit {

  public produtos = [];
  public isSalvo = false;
  public estoque = {
    id: 0,
    produtoId: 0,
    data: '',
    quantidade: 0
  }
  private estoqueLista = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const estId = params['estoqueId'];
      const estList = window.localStorage.getItem('estoque');
      this.estoqueLista = JSON.parse(estList);
      const produtosLista = window.localStorage.getItem('produtos');
      this.produtos = JSON.parse(produtosLista);
      for (var i = 0; i < this.estoqueLista.length; i++) {
        if (this.estoqueLista[i].id == estId) {
          this.estoque = this.estoqueLista[i];
        }
      }
    });
  }

  salvar() {
    if (this.estoque.quantidade == 0) {
      var index = this.estoqueLista.indexOf(this.estoque);
      if (index > -1) {
        this.estoqueLista.splice(index, 1);
      }
    } else {
      for (var i = 0; i < this.estoqueLista.length; i++) {
        if (this.estoqueLista[i].id == this.estoque.id) {          
          this.estoqueLista[i].quantidade = this.estoque.quantidade;
        }
      }
    }    
    this.isSalvo = true;
    window.localStorage.setItem('estoque', JSON.stringify(this.estoqueLista));
  }

}
