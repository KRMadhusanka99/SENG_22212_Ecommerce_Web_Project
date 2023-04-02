package com.EcommerceApp.backendapp.DTO;

import com.EcommerceApp.backendapp.entity.Carousel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarouselRepository extends JpaRepository<Carousel, Long> {
}
