package com.verscend.HappyTrip.CustomerController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.verscend.HappyTrip.Entity.PackageTrip;
import com.verscend.HappyTrip.Entity.Repository.PackageRepository;

@RequestMapping("/Package")
public class PackageController {
	
	@Autowired
	PackageRepository packRepo;
	
	@RequestMapping("/add")
	public void addPackage(@RequestBody PackageTrip packageTrip) {
		packRepo.save(packageTrip);
	}
	@RequestMapping("/delete/{id}")
	public void deletePackage(@PathVariable int id) {
		packRepo.deleteById(id);
	}
	@RequestMapping("/update")
	public void updatePackage(@RequestBody PackageTrip packageTrip) {
		packRepo.save(packageTrip);
	}
	@RequestMapping("/all")
	public List<PackageTrip> showPackage() {
		return (List<PackageTrip>) packRepo.findAll();
	}
}
