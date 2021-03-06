import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ListaPedidoComponent } from './lista-pedido/lista-pedido.component';
import { PedidoEditarComponent } from './pedido-editar/pedido-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ListaProdutoComponent,
    ProdutoCadastroComponent,
    PedidoComponent,
    ListaPedidoComponent,
    PedidoEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
