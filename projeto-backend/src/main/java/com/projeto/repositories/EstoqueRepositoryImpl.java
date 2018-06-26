package com.projeto.repositories;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;

import com.projeto.entities.Estoque;
import com.projeto.entities.QEstoque;
import com.projeto.entities.QPedido;
import com.querydsl.jpa.impl.JPAQueryFactory;

public class EstoqueRepositoryImpl implements EstoqueRepositoryQueries {
private static final QEstoque ESTOQUE = QEstoque.estoque;
	
	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Estoque> findAll() {
		return new JPAQueryFactory( entityManager )
				.selectFrom( ESTOQUE )
				.orderBy( ESTOQUE.id.asc() )
				.fetch();
	}
}
