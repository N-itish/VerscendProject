package com.verscend.HappyTrip.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import java.util.Date;

@Entity
@Table(name = "PackageTrip")
public class PackageTrip {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id")
	private int id;
	@Column(name = "packageName")
	private String packageName;
	
	@Column(name = "packageDescription")
	private String packageDescription;
	
	@Column(name = "imagesLocation")
	private String imagesLocation;
	
	public String getPackageName() {
		return packageName;
	}

	public void setPackageName(String packageName) {
		this.packageName = packageName;
	}
	@Column(name = "location")
	private String location;
	
	@Column(name = "days")
	private String days;
	
	@Column(name = "price")
	private String price;
	
	@Column(name = "startDate")
	@Temporal(TemporalType.DATE)
	private Date startDate;
	
	@Column(name = "endDate")
	@Temporal(TemporalType.DATE)
	private Date endDate;
	
	
	public PackageTrip() {
		
	}
	
	public PackageTrip(int id, String packageDescription,String imagesLocation, String location, String days,
			String price, Date startDate, Date endDate,String packageName) {
		super();
		this.id = id;
		this.packageDescription = packageDescription;
		this.imagesLocation = imagesLocation;
		this.location = location;
		this.days = days;
		this.price = price;
		this.startDate = startDate;
		this.endDate = endDate;
		this.packageName = packageName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPackageDescription() {
		return packageDescription;
	}
	public void setPackageDescription(String packageDescription) {
		this.packageDescription = packageDescription;
	}
	public String getImagesLocation() {
		return imagesLocation;
	}
	public void setImagesLocation(String imagesLocation) {
		this.imagesLocation = imagesLocation;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDays() {
		return days;
	}
	public void setDays(String days) {
		this.days = days;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	@Override
	public String toString() {
		return "PackageTrip [id=" + id + ", packageName=" + packageName + ", packageDescription=" + packageDescription
				+ ", imagesLocation=" + imagesLocation + ", location=" + location + ", days=" + days + ", price="
				+ price + ", startDate=" + startDate + ", endDate=" + endDate + "]";
	}
	
	
	
}
