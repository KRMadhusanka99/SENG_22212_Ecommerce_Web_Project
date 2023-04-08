package com.EcommerceApp.backendapp.Service;

import com.EcommerceApp.backendapp.Entity.Category;

import java.util.List;

public interface CategoryService {
    Category addCategory(Category category);
    Category getCategoryById(Long category_id);
    List<Category> getAllCategories();
    Category updateCategory(long category_id, Category newCategory);
}
