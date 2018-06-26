package com.projeto.dtos;

import com.projeto.entities.Estoque;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EstoqueDto {

	private String id;
	private long quantidade;
	private String produtoId;
	private String dataValidade;
	
	public EstoqueDto(Estoque estoque) {
		this.id = estoque.getId();
		this.quantidade = estoque.getQuantidade();
		this.dataValidade = estoque.getDataValidade();
		this.produtoId = estoque.getProdutoId();
	}

	public Estoque toEntity() {
		return Estoque.builder()
				.id(this.id)
				.quantidade(this.quantidade)
				.produtoId(this.produtoId)
				.dataValidade(this.dataValidade)
				.build();
	}
}
