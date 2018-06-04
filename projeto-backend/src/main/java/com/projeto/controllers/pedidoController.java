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
import com.projeto.dtos.pedidoIdDto;
import com.projeto.interactions.pedido.PedidoAdition;
import com.projeto.interactions.product.ProductAdition;
import com.projeto.repositories.PedidoRepository;

@RestController
@CrossOrigin
@RequestMapping(value = "/pedidos")
public class pedidoController {

	@Autowired
	private PedidoRepository pedidoRepository;

	@Autowired
	private PedidoAdition pedidoAdition;
	
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public List<PedidoDto> getAll() {
		return pedidoAdition.getAll().stream().map(pedido -> new PedidoDto(pedido)).collect(Collectors.toList());
	}
	
	@RequestMapping(value = "/test", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public PedidoDto get(@RequestBody pedidoIdDto id) {
		return new PedidoDto(pedidoRepository.findOne(id.getId()));
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public PedidoDto save(@PathVariable String parentId, @RequestBody PedidoDto pedidoDto) {
		return new PedidoDto( pedidoRepository.save( pedidoDto.toEntity() ) );
	}

	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public PedidoDto saveRoot(@RequestBody PedidoDto pedidoDto) {
		return new PedidoDto( pedidoRepository.save( pedidoDto.toEntity() ) );
	}

	@RequestMapping(value = "/deletar", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void delete(@RequestBody pedidoIdDto id) {
		pedidoRepository.delete( id.getId() );
	}
}
