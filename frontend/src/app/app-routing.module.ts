import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { PedidoEditarComponent } from './pedido-editar/pedido-editar.component';

const routes: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'produto', component: ProdutoComponent },
  { path: 'produto-cadastro', component: ProdutoCadastroComponent },
  { path: 'produtos', component: ListaProdutoComponent },
  { path: 'pedido', component: PedidoComponent},
  { path: 'lista-pedidos', component: ListaPedidoComponent},
  { path: 'pedido/:id', component: PedidoEditarComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
