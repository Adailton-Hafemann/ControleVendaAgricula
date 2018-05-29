import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../core/service/produto/produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto = {
    id: 0,
    nome: '',
    tipo: '',
    valor: ''
  };

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
  }

  salvar(){    
    this.produtoService.insert(this.produto).subscribe((response)=> {
      console.log('Foiii');
    })
  }

  eValorValido(valor) {
    const reg = new RegExp('^(0|[1-9][0-9]*)$');
    return !reg.test(valor);
  }

}
