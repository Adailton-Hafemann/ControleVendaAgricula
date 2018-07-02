import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AgendamentoComponent } from './agendamento.component';
import { ListaAgendamentoComponent } from './lista-agendamento/lista-agendamento.component';
import { AddAgendamentoComponent } from './add-agendamento/add-agendamento.component';

const routes: Routes = [
  {
    path: 'lista-agendamento',
    component: ListaAgendamentoComponent
  },
  {
    path: 'add-agendamento/:agendamentoId',
    component: AddAgendamentoComponent
  },
  {
    path: '',
    component: AgendamentoComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [AgendamentoComponent],
  declarations: [AgendamentoComponent, ListaAgendamentoComponent, AddAgendamentoComponent]
})
export class AgendamentoModule { }
