import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueListaComponent } from './estoque-lista/estoque-lista.component';
import { Routes, RouterModule } from '@angular/router';
import { EstoqueComponent } from './estoque.component';

const routes: Routes = [
  // {
  //   path: 'estoque-lista',
  //   component: EstoqueListaComponent
  // },
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
  exports: [EstoqueModule],
  declarations: [EstoqueListaComponent, EstoqueComponent]
})
export class EstoqueModule { }
