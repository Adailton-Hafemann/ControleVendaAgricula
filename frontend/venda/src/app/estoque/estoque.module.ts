import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueListaComponent } from './estoque-lista/estoque-lista.component';
import { Routes, RouterModule } from '@angular/router';
import { EstoqueComponent } from './estoque.component';
import { AddEstoqueComponent } from './add-estoque/add-estoque.component';
import { SaidaEstoqueComponent } from './saida-estoque/saida-estoque.component';

const routes: Routes = [
  {
    path: 'lista-estoque',
    component: EstoqueListaComponent
  },
  {
    path: 'add-estoque',
    component: AddEstoqueComponent
  },
  {
    path: 'saida-estoque',
    component: SaidaEstoqueComponent
  },
  {
    path: '',
    component: EstoqueComponent
  },
];

@NgModule({
  imports: [
    CommonModule,    
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [EstoqueComponent],
  declarations: [EstoqueListaComponent, EstoqueComponent, AddEstoqueComponent, SaidaEstoqueComponent]
})
export class EstoqueModule { }
