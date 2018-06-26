package com.projeto.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.dtos.EstoqueDto;
import com.projeto.dtos.PedidoDto;
import com.projeto.interactions.pedido.PedidoAdition;
import com.projeto.repositories.EstoqueRepository;

@RestController
@CrossOrigin
@RequestMapping(value = "/estoque")
public class EstoqueController {

	@Autowired
	private PedidoAdition pedidosAdition;
	
	@Autowired
	private EstoqueRepository estoqueRepository;

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public List<EstoqueDto> getAll() {
		return estoqueRepository.findAll().stream().map(estoque -> new EstoqueDto(estoque)).collect(Collectors.toList());		
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public EstoqueDto get(@PathVariable String estoqueId) {
		return new EstoqueDto(estoqueRepository.findOne(estoqueId));
	}
	
	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public EstoqueDto save(@RequestBody EstoqueDto estoqueDto) {
		return new EstoqueDto(estoqueRepository.save(estoqueDto.toEntity()));
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable String estoqueId) {
		estoqueRepository.delete(estoqueId);
	}
}
