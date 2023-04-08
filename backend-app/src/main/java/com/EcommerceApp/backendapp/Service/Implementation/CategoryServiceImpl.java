package com.EcommerceApp.backendapp.Service.Implementation;

import com.EcommerceApp.backendapp.Entity.Category;
import com.EcommerceApp.backendapp.Repository.CategoryRepository;
import com.EcommerceApp.backendapp.Service.CategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {

        return categoryRepository.save(category);
    }

    @Override
    public Category getCategoryById(Long category_id) {

        Category category = categoryRepository.findById(category_id).orElseThrow(
                ()->new RuntimeException("This Category Id not found"));
        return category;
    }

    @Override
    public List<Category> getAllCategories() {

        return categoryRepository.findAll();
    }

    @Override
    public Category updateCategory(long category_id, Category newCategory) {
        Category oldCat = this.categoryRepository.findById(category_id).orElseThrow(
                ()->new RuntimeException("This Category Id not found"));
        oldCat.setName(newCategory.getName());
        Category save = this.categoryRepository.save(oldCat);
        return save;
    }
}
