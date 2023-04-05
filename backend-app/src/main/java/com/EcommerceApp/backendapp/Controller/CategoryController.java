package com.EcommerceApp.backendapp.Controller;

import com.EcommerceApp.backendapp.Entity.Category;
import com.EcommerceApp.backendapp.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    //Add category
    @PostMapping("/add")
    public ResponseEntity<Category> addCategory(@RequestBody Category category){
        Category save = categoryService.addCategory(category);
        return new ResponseEntity<Category>(save, HttpStatus.CREATED);
    }

    //View All categories
    @GetMapping("viewAll")
    public ResponseEntity<List<Category>> getAllCategories(){
        List<Category> all = this.categoryService.getAllCategories();
        return new ResponseEntity<List<Category>>(all,HttpStatus.OK);
    }

    //view Category by id
    @GetMapping("/viewById")
    public ResponseEntity<Category> getCategoryById(@RequestParam Long category_id){
        Category getById = this.categoryService.getCategoryById(category_id);
        return new ResponseEntity<Category>(getById,HttpStatus.OK);
    }
    //Update Category
    @PutMapping("/update")
    public ResponseEntity<Category> updateCategory(@RequestParam int category_id, @RequestBody Category category){
        Category update = this.categoryService.updateCategory(category_id, category);
        return new ResponseEntity<Category>(update,HttpStatus.OK);
    }
}
