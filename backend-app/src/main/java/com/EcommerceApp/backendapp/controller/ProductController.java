package com.EcommerceApp.backendapp.controller;

import com.EcommerceApp.backendapp.Service.ProductService;
import com.EcommerceApp.backendapp.entity.Category;
import com.EcommerceApp.backendapp.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Controller
public class ProductController {

    @Autowired
    private ProductService productService;
    // list all products
    @GetMapping("/listProducts")
    public String showExampleView(Model model)
    {
        List<Product> products = productService.getAllProduct();
        model.addAttribute("products", products);
        return "listProducts";
    }
    @GetMapping("/Admin-Product")
    public String showAddProduct(Model model)
    {
        model.addAttribute("category", new Category());
        model.addAttribute("categories", productService.getAllCategories());
        model.addAttribute("products", productService.getAllProduct());
        return "Admin/product";
    }

    @PostMapping("/addProduct")
    public String saveProduct(@RequestParam("file") MultipartFile file,
                              @RequestParam("pname") String name,
                              @RequestParam("price") double price,
                              @RequestParam("desc") String desc)
    {
        productService.saveProductToDB(file, name, desc, price);
        return "listProducts ";
    }
    // delete product by id
    @GetMapping("/Admin/deleteProd/{id}")
    public String deleteProduct(@PathVariable("id") Long id)
    {

        productService.deleteProductById(id);
        return "Product deleted";// redirect the page
    }

    // Admin change product details
    @PostMapping("/Admin/changeName")
    public String changePname(@RequestParam("id") Long id,
                              @RequestParam("newPname") String name)
    {
        productService.chageProductName(id, name);
        return "Name changed";
//        return "redirect:/Admin/index";
    }
    @PostMapping("/Admin/changeDescription")
    public String changeDescription(@RequestParam("id") Long id ,
                                    @RequestParam("newDescription") String description)
    {
        productService.changeProductDescription(id, description);
        return "Desc changed";
//        return "redirect:/Admin/index";
    }

    @PostMapping("/Admin/changePrice")
    public String changePrice(@RequestParam("id") Long id ,
                              @RequestParam("newPrice") Double price)
    {

        productService.changeProductPrice(id, price);
        return "price changed";
//        return "redirect:/Admin/index";
    }

    @PostMapping("/Admin/addCategory")
    public String addCategory(@ModelAttribute Category category , Model model) {
        productService.saveCategory(category);
        return "redirect:/Admin/product";
    }
}
