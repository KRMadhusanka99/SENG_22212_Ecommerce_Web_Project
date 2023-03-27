package com.EcommerceApp.backendapp.entity;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name="_product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @Column(columnDefinition = "LONGTEXT")
    private String description;
    private int quantity;
    private Double price;
    private String brand;
    @Lob
    @Column(columnDefinition = "MEDIUMBLOB")
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
    @ManyToMany(cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
    @JoinTable(name="product_category",joinColumns = {
            @JoinColumn(name="product_id", referencedColumnName = "id")}
            ,inverseJoinColumns = {@JoinColumn(name="category_id",referencedColumnName = "id")})
    private Set<Category> categories = new HashSet<Category>();

    @OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinColumn(name="product_id")
    private Set<Carousel> carousel;

    public Set<Carousel> getCarousel() {
        return carousel;
    }

    public void setCarousel(Set<Carousel> carousel) {
        this.carousel = carousel;
    }

    public Long getId() {
        return id;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

//
//    @Override
//    public String toString() {
//        return "Product [id=" + id + ", name=" + name + ", description="
//                + description + ", price=" + price + ", image="
//                + image + "]";
//    }

}
