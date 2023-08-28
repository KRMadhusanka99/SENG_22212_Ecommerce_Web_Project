package com.EcommerceApp.backendapp.Repository;

import com.EcommerceApp.backendapp.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
}
