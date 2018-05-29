package com.projeto.interactions.pedido;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.entities.Pedido;
import com.projeto.repositories.PedidoRepository;

@Service
public class PedidoAdition {
	
	@Autowired
	private PedidoRepository repository;


	public List<Pedido> getAll() {
		return repository.findAll();
	}
}
