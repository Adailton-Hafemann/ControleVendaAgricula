package com.projeto.interactions.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.entities.Product;
import com.projeto.repositories.ProductRepository;

@Service
public class ProductAdition {

	@Autowired
	private ProductRepository repository;

	public Product save(Product product) {				
		return repository.save( product );
	}
	
	public List<Product> getAll() {
		return repository.findRootFolders();
	}

}
