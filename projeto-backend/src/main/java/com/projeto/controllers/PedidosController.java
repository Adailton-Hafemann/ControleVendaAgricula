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

import com.projeto.dtos.PedidoDto;
import com.projeto.dtos.ProductDto;
import com.projeto.interactions.pedido.PedidoAdition;
import com.projeto.interactions.product.ProductAdition;
import com.projeto.repositories.PedidoRepository;

@RestController
@CrossOrigin
@RequestMapping(value = "/pedidos")
public class PedidosController {
	
	@Autowired
	private PedidoAdition pedidosAdition;
	
	@Autowired
	private PedidoRepository pedidoRepository;

	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public List<PedidoDto> getAll() {
		return pedidosAdition.getAll().stream().map(pedido -> new PedidoDto(pedido)).collect(Collectors.toList());		
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public PedidoDto get(@PathVariable String pedidoId) {
		return new PedidoDto(pedidoRepository.findOne(pedidoId));
	}
	
	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public PedidoDto save(@RequestBody PedidoDto pedidoDto) {
		return new PedidoDto( pedidoRepository.save( pedidoDto.toEntity() ) );
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable String pedidoId) {
		pedidoRepository.delete( pedidoId );
	}
}
