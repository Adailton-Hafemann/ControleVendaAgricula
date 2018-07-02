import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  produtos = [{
    id: 1,
    nome: "Arroz",
    unidadeMedida: "Saco"
  }, {
    id: 2,
    nome: "Semente Arroz",
    unidadeMedida: "Saco"
  },{
    id: 3,
    nome: "Ureia",
    unidadeMedida: "Saco"
  },{
    id: 4,
    nome: "Roundup",
    unidadeMedida: "Litros"
  }];

  ngOnInit() {
    window.localStorage.setItem('produtos', JSON.stringify(this.produtos));    
  }
}
