import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PedidosComponent } from './pedidos.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { AddPedidoComponent } from './add-pedido/add-pedido.component';

const routes: Routes = [
  {
    path: 'lista-pedidos',
    component: ListaPedidoComponent
  },
  {
    path: 'add-pedido',
    component: AddPedidoComponent
  },
  {
    path: '',
    component: PedidosComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [PedidosComponent],
  declarations: [PedidosComponent, ListaPedidoComponent, AddPedidoComponent]
})
export class PedidosModule { }
