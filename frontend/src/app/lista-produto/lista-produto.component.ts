import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../core/service/produto/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  listaProduto: any

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getListaProduto().subscribe((response)=> {
      this.listaProduto = response;
    });
  }

}
