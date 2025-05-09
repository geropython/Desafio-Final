package com.example.backend.controller;

import com.example.backend.model.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173") // Permite peticiones desde el frontend React
public class ProductController {

    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
    }

    // Obtener todos los productos
    @GetMapping
    public List<Product> getAll() {
        return repository.findAll();
    }

    // Agregar un nuevo producto
    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody Product product) {
        return ResponseEntity.ok(repository.save(product));
    }

    // Eliminar un producto
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        Optional<Product> product = repository.findById(id);
        if (product.isPresent()) {
            repository.deleteById(id); // Eliminar producto
            return ResponseEntity.noContent().build(); // Respuesta con código 204 (sin contenido)
        } else {
            return ResponseEntity.status(404).body("Producto no encontrado"); // Si no se encuentra el producto
        }
    }
}
