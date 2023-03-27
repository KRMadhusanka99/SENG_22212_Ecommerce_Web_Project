package com.EcommerceApp.backendapp.Service;

import com.EcommerceApp.backendapp.DTO.CategoryRepository;
import com.EcommerceApp.backendapp.DTO.ProductRepository;
import com.EcommerceApp.backendapp.entity.Carousel;
import com.EcommerceApp.backendapp.entity.Category;
import com.EcommerceApp.backendapp.entity.Product;
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepo;
    @Autowired
    private CategoryRepository categoryRepository;

    public void  saveProductToDB(MultipartFile file,String name,String description,int quantity
            ,Double price,String brand, String categories)
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
        product.setBrand(brand);
        product.setQuantity(quantity);
        product = addCategoriesToProduct(product,categories);
        productRepo.save(product);
    }
    private Product addCategoriesToProduct(Product p ,String categories) {
        String [] cates = categories.split(",");
        Category category = null;
        for(String str : cates) {
            category = categoryRepository.findById(Long.parseLong(str)).get();
            p.getCategories().add(category);
        }
        return p;
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

    public void addImageToProduct(MultipartFile file, Long id) {
        Product p = productRepo.findById(id).get();
        Carousel carousel = new Carousel();
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        if(fileName.contains(".."))
        {
            System.out.println("not a valid file");
        }
        try {
            p.setImage(resizeImageForUse(Base64.getEncoder().encodeToString(file.getBytes()),400,400));
        } catch (IOException e) {
            e.printStackTrace();
        }
        p.getCarousel().add(carousel);
        productRepo.save(p);
    }

    //no api..........


    public String resizeImageForUse(String src,int width, int height) {
        BufferedImage image = base64ToBufferedImage(src);
        try {
            image = resizeImage(image, width,height);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        try {
            return bufferedImageTobase64(image);
        } catch (UnsupportedEncodingException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
    private  BufferedImage resizeImage(BufferedImage image , int width , int height) throws IOException {
        ByteArrayOutputStream outputstream = new ByteArrayOutputStream();
        try {
            Thumbnails.of(image).size(width, height).outputFormat("JPEG").outputQuality(1).toOutputStream(outputstream);
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        byte[] data = outputstream.toByteArray();
        ByteArrayInputStream inputStream = new ByteArrayInputStream(data);
        return ImageIO.read(inputStream);
    }
    private BufferedImage base64ToBufferedImage(String base64Img) {
        BufferedImage image = null;
        byte[] decodedBytes = Base64.getDecoder().decode(base64Img);

        try {
            image = ImageIO.read(new ByteArrayInputStream(decodedBytes));
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return image;
    }

    private String bufferedImageTobase64(BufferedImage image ) throws UnsupportedEncodingException {
        final ByteArrayOutputStream out = new ByteArrayOutputStream();
        try {
            ImageIO.write(image, "JPEG", Base64.getEncoder().wrap(out));
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return out.toString(StandardCharsets.ISO_8859_1.name());
    }
}