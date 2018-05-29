import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../core/service/produto/produto.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public produto = {id: null, nome: "", descricao: ""};

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute:ActivatedRoute,
    public http: HttpClient,
  ) { }

  ngOnInit() {    
    
  }

  salvar() {
    this.produto.id = null;
    this.http.post('http://localhost:8080/products', this.produto).subscribe((response) => {
      console.log(response);
    })
  }
}
