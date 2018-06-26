package com.projeto.repositories;

import org.springframework.data.repository.CrudRepository;

import com.projeto.entities.Estoque;

public interface EstoqueRepository extends CrudRepository<Estoque, String>, EstoqueRepositoryQueries {

}
