package com.EcommerceApp.backendapp.Service;

import com.EcommerceApp.backendapp.DTO.CategoryRepository;
import com.EcommerceApp.backendapp.DTO.ProductRepository;
import com.EcommerceApp.backendapp.entity.Category;
import com.EcommerceApp.backendapp.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepo;
    @Autowired
    private CategoryRepository categoryRepository;

    public void  saveProductToDB(MultipartFile file, String name, String description
            , double price)
    {
        Product product = new Product();
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if(fileName.contains(".."))
        {
            System.out.println("not a a valid file");
        }
        try {
            product.setImage(Base64.getEncoder().encodeToString(file.getBytes()));//convert string repersentation
        } catch (IOException e) {
            e.printStackTrace();//todo change this
        }
        product.setDescription(description);

        product.setName(name);
        product.setPrice(price);

        productRepo.save(product);
    }

    public List<Product> getAllProduct()
    {
        return productRepo.findAll();
    }
    public void deleteProductById(Long id)
    {
        productRepo.deleteById(id);
    }
    public void chageProductName(Long id ,String name)
    {
        Product p = new Product();
        p = productRepo.findById(id).get();
        p.setName(name);
        productRepo.save(p);
    }
    public void changeProductDescription(Long id , String description)
    {
        Product p = new Product();
        p = productRepo.findById(id).get();
        p.setDescription(description);
        productRepo.save(p);
    }
    public void changeProductPrice(Long id,double price)
    {
        Product p = new Product();
        p = productRepo.findById(id).get();
        p.setPrice( price);
        productRepo.save(p);
    }
    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    public List<Category> getAllCategories() {

        return categoryRepository.findAll();
    }
}