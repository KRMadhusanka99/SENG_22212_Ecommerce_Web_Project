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
// class for single page web application
@Controller
public class GetViewController {
    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(value = "/addProduct",method = RequestMethod.GET)//url(value): in api/ajaxfetch.js
    @ResponseBody//return html page
    public ModelAndView returnAddProduct()
    {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("addProduct");//html file name add product form page

        return modelAndView;

    }

    @RequestMapping(value = "/listProduct",method = RequestMethod.GET)
    @ResponseBody
    public ModelAndView returnListProduct()
    {
        ModelAndView modelAndView = new ModelAndView();
        List<Product> products = productRepository.findAll();
        modelAndView.setViewName("/list");
        modelAndView.addObject("products", products);// html products list page
        return modelAndView;

    }
}
