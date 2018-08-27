package com.verscend.HappyTrip.CustomerController;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.verscend.HappyTrip.Entity.Customers;
import com.verscend.HappyTrip.Entity.Repository.CustomersRepository;
import java.util.List;

@RestController
@RequestMapping("/Customers")
@CrossOrigin(origins = "*", allowCredentials = "true", allowedHeaders = "*")
public class CustomerController {
	@Autowired
	CustomersRepository cusRep;
	@RequestMapping(value = "/all",method = RequestMethod.GET)
	public List<Customers> getAll(){
		return (List<Customers>) cusRep.findAll();
	}
	
	@RequestMapping(value = "/login")
	public void login()
	{
		
	}
	@RequestMapping(value = "/add",method = RequestMethod.POST)
	public void insert(@RequestBody Customers customer) {
		//saving the data to the database
		System.out.println(customer.toString());
		cusRep.save(customer);
		
	}
	@RequestMapping(value = "/update")
	public void update() {
		System.out.println("data updated");
	}
	
	@SuppressWarnings("deprecation")
	@Bean
	public WebMvcConfigurer corsConfigurer() 
	{
		  return new WebMvcConfigurerAdapter() 
		  {
			  @Override
			  public void addCorsMappings(CorsRegistry registry) 
			  {
				  	registry.addMapping("/*").allowedOrigins("*");
			  }
		  };
	 }
}

