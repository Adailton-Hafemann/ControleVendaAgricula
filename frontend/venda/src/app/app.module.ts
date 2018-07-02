import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EstoqueModule } from './estoque/estoque.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { AgendamentoModule } from './agendamento/agendamento.module';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'estoques',
    loadChildren: './estoque/estoque.module#EstoqueModule'
  },
  {
    path: 'pedidos',
    loadChildren: './pedidos/pedidos.module#PedidosModule'
  },
  {
    path: 'agendamento',
    loadChildren: './agendamento/agendamento.module#AgendamentoModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    EstoqueModule,
    PedidosModule,
    AgendamentoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
