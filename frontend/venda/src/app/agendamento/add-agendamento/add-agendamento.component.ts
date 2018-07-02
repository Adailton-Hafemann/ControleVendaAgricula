import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-agendamento',
  templateUrl: './add-agendamento.component.html',
  styleUrls: ['./add-agendamento.component.css']
})
export class AddAgendamentoComponent implements OnInit {

  private agendamentoId: any;
  public produtos = [];
  public isSalvo = false;
  public agendamento = {
    id: 0,
    produtoId: 0,
    data: '',
    quantidade: 0
  }
  private agendamentos = [];

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.agendamentoId = params['agendamentoId'];   
      const produtosLista = window.localStorage.getItem('produtos');
      this.produtos = JSON.parse(produtosLista);
      const agen = window.localStorage.getItem('agendamentos');
      this.agendamentos = JSON.parse(agen);
      if (this.agendamentos == undefined) {
        this.agendamentos = [];
      }
      if (this.agendamentoId !== 0 ) {
        for (var i = 0; i < this.agendamentos.length; i++) {
          if (this.agendamentos[i].id == this.agendamentoId) {
            this.agendamento = this.agendamentos[i];
          }
        }
      }
    });    
  }

  salvar() {
    if (this.agendamentoId == 0){
      this.agendamento.id = this.agendamentos.length + 1;
      this.agendamentos.push(this.agendamento);
    } else {
      for (var i = 0; i < this.agendamentos.length; i++) {
        if (this.agendamentos[i].id == this.agendamentoId) {
          this.agendamentos[i].produtoId = this.agendamento.produtoId;
          this.agendamentos[i].quantidade = this.agendamento.quantidade;
          this.agendamentos[i].data = this.agendamento.data;
        }
      }
    }  
    this.isSalvo = true;
    window.localStorage.setItem('agendamentos', JSON.stringify(this.agendamentos));
  }

  remover() {       
    var index = this.agendamentos.indexOf(this.agendamento);
      if (index > -1) {
        this.agendamentos.splice(index, 1);
      }           
    window.localStorage.setItem('agendamentos', JSON.stringify(this.agendamentos));
    this.router.navigate(['/lista-agendamento']);
  }

}
