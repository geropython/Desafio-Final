package com.example.backend;

import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ProductRepository repository;

    public DataLoader(ProductRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        if (repository.count() == 0) {
            Product product1 = new Product();
            product1.setName("Vuelo a París");
            product1.setDescription("Directo desde Buenos Aires");
            product1.setPrice(1200.0);
            product1.setImages("[\"/images/paris1.jpg\", \"/images/paris2.jpg\"]");

            Product product2 = new Product();
            product2.setName("Vuelo a Nueva York");
            product2.setDescription("Con escalas intermedias");
            product2.setPrice(950.0);
            product2.setImages("[\"/images/ny1.jpg\"]");

            repository.save(product1);
            repository.save(product2);
        }
    }
}
