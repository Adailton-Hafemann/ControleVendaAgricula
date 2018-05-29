package com.projeto.repositories;

import org.springframework.data.repository.CrudRepository;

import com.projeto.entities.Pedido;

public interface PedidoRepository extends CrudRepository<Pedido, String>, PedidoRepositoryQueries {

}
