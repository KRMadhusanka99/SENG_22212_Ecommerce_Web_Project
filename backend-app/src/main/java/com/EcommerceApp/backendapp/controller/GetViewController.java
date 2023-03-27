package com.EcommerceApp.backendapp.controller;

import com.EcommerceApp.backendapp.DTO.ProductRepository;
import com.EcommerceApp.backendapp.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class GetViewController {
    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(value = "/addProduct",method = RequestMethod.GET)
    @ResponseBody
    public ModelAndView returnAddProduct()
    {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("/add");

        return mv;

    }

    @RequestMapping(value = "/listProduct",method = RequestMethod.GET)
    @ResponseBody
    public ModelAndView returnListProduct()
    {
        ModelAndView mv = new ModelAndView();
        List<Product> products = productRepository.findAll();
        mv.setViewName("/list");
        mv.addObject("products", products);
        return mv;

    }
}
