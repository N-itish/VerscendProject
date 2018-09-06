package com.verscend.HappyTrip.CustomerController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.verscend.HappyTrip.Entity.Booking;
import com.verscend.HappyTrip.Entity.Repository.BookingRepository;


@RestController
@CrossOrigin(origins = "*",allowedHeaders="*")
@RequestMapping("/Booking")
public class BookingController {
	@Autowired
	BookingRepository BookingRepo;
	

	@RequestMapping(value = "/add",method = RequestMethod.POST)
	public void getBooking(@RequestBody Booking booking) {
		
		BookingRepo.save(booking);
	}
	@RequestMapping(value = "/all",method = RequestMethod.GET)
	public List<Booking> getBooking() {
		return (List<Booking>) BookingRepo.findAll();
	}
	@RequestMapping(value = "/cancel/{id}")
	public void cancelBooking(@PathVariable int id)
	{
		
		for(Booking b:BookingRepo.findAll())
		{
			if (b.getBookId() == id)
			{
				b.setBookedStatus(false);
				BookingRepo.save(b);
			}
		}
	}
	
}
