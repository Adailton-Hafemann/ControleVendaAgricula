package com.projeto.dtos;

import com.google.common.base.Strings;
import com.projeto.entities.Product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
	private String id;	
	private String nome;
	private String descricao;
	
	public ProductDto(Product product) {
		this.id = product.getId();
		this.nome = product.getNome();
		this.descricao = product.getDescription();
	}

	public Product toEntity() {
		return Product.builder()
				.id( this.id )
				.nome(this.nome)
				.description(this.descricao)
				.build();
	}

}