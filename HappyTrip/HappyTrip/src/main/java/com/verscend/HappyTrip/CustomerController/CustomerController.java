package com.verscend.HappyTrip.CustomerController;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
	@ResponseBody
	@RequestMapping(value = "/add",method = RequestMethod.POST)
	public void insert(@RequestBody String json) {
		Customers customer = new Customers();
		
		//creating json object form given stringified json data
		JSONObject JsonData =new JSONObject(json);
		
		//setting the data from form to the customer object
		customer.setFirstName( JsonData.getString("firstName"));
		customer.setLastName(JsonData.getString("lastName"));
		customer.setAge(JsonData.getInt("age"));
		customer.setEmail(JsonData.getString("email"));
		customer.setPassword(JsonData.getString("password"));
		customer.setGender(JsonData.getString("gender"));
		customer.setPhoneNo( JsonData.getString("phoneNo"));
		System.out.println(customer.toString());
		
		//saving the data to the database
		cusRep.save(customer);
	
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

