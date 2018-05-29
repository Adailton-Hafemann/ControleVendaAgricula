package com.projeto.repositories;

import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;

import com.projeto.entities.Pedido;
import com.projeto.entities.QPedido;
import com.querydsl.jpa.impl.JPAQueryFactory;

public class PedidoRepositoryImpl implements PedidoRepositoryQueries {

	private static final QPedido PEDIDO = QPedido.pedido;
	
	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Pedido> findAll() {
		return new JPAQueryFactory( entityManager )
				.selectFrom( PEDIDO )
				.orderBy( PEDIDO.id.asc() )
				.fetch();
	}

}
