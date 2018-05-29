package com.projeto.dtos;

import com.projeto.entities.Pedido;
import com.projeto.entities.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PedidoDto {
	private String id;	
	private String produtoId;
	private long quantidade;
	
	public PedidoDto(Pedido pedido) {
		this.id = pedido.getId();
		this.produtoId = pedido.getProdutoId();
		this.quantidade = pedido.getQuantidade();
	}

	public Pedido toEntity() {
		return Pedido.builder()
				.id( this.id )
				.quantidade(this.quantidade)
				.produtoId(this.produtoId)
				.build();
	}
}
