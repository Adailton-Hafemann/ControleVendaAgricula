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

import com.projeto.dtos.ProductDto;
import com.projeto.dtos.ProductsDto;
import com.projeto.entities.Product;
import com.projeto.interactions.product.ProductAdition;
import com.projeto.repositories.ProductRepository;

@RestController
@CrossOrigin
@RequestMapping(value = "/products")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ProductAdition productAdition;
	
	@RequestMapping(value = "/all", method = RequestMethod.GET)
	public List<ProductDto> getAll() {
		return productAdition.getAll().stream().map(produto -> new ProductDto(produto)).collect(Collectors.toList());
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ProductDto save(@PathVariable String parentId, @RequestBody ProductDto productDto) {
		return new ProductDto( productAdition.save( productDto.toEntity() ) );
	}

	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ProductDto saveRoot(@RequestBody ProductDto productDto) {
		return new ProductDto( productAdition.save( productDto.toEntity() ) );
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable String productId) {
		productRepository.delete( productId );
	}

}
