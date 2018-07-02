import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-estoque',
  templateUrl: './add-estoque.component.html',
  styleUrls: ['./add-estoque.component.css']
})
export class AddEstoqueComponent implements OnInit {
  
  public produtos = [];
  public isSalvo = false;
  public estoque = {
    id: 0,
    produtoId: 0,
    data: '',
    quantidade: 0
  }
  private estoqueLista = [];

  constructor() { }  

  ngOnInit() {          
    const estList = window.localStorage.getItem('estoque');
      this.estoqueLista = JSON.parse(estList);
      const produtosLista = window.localStorage.getItem('produtos');
      this.produtos = JSON.parse(produtosLista);      
      if (this.estoqueLista == undefined) {
        this.estoqueLista = [];
      }          
  }

  salvar() {      
    this.estoque.id = this.estoqueLista.length + 1;
    this.estoqueLista.push(this.estoque);
    this.isSalvo = true;
    window.localStorage.setItem('estoque', JSON.stringify(this.estoqueLista));
  }

}
