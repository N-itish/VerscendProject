package com.verscend.HappyTrip.Entity;

<<<<<<< HEAD
import java.util.Date;

=======
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
>>>>>>> sixteenth commit
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import ch.qos.logback.core.subst.Token.Type;

@Entity
@Table(name = "Customers")
public class Customers {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name = "id")
	private int id;
	
	@Column(name = "firstName")
	private String firstName;
	
	@Column(name = "lastName")
	private String lastName;
	
	@Column(name = "age")
	private int age;
	
	@Column(name = "gender")
	private String gender;
	
	@Column(name = "phoneNo")
	private String phoneNo;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;

	
<<<<<<< HEAD
	@Column(name = "currentDate")
	@Temporal(TemporalType.TIMESTAMP)
	private Date currentDate;
	
	public String getFirstName() {
		return firstName;
	}
	public Date getCurrentDate() {
		return currentDate;
	}
	public Customers() {
		
	}
	public Customers(Date currentDate,String firstName, String lastName, int age, String phoneNo, String email, String password,String gender) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.phoneNo = phoneNo;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.currentDate = currentDate;
=======
	//This is for the one to many mapping
	
	
	//The mapping below is used to map 
	//multiple bookings for single customer
	//i.e 1 customer --> n bookings
	@OneToMany(
			cascade = CascadeType.ALL,
			orphanRemoval = true
	)
	@JoinColumn(name = "bookId")
	private List<Booking> bookings =  new ArrayList<>();
	
	// Seperated the getter and the setter for booking
	// Getter returns all the list of bookings
	public List<Booking> getBookings() {
		return bookings;
	}
	// Setter sets the single booking in list
	public void setBookings(Booking booking) {
		bookings.add(booking);
	}

	//--------------- one to many mapping ---------------//
	
	
	//Getter and Setter methods
	public int getId() {
		return id;
>>>>>>> sixteenth commit
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Customers(int id, String firstName, String lastName, int age, String gender, String phoneNo, String email,
			String password) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.phoneNo = phoneNo;
		this.email = email;
		this.password = password;
	}

	@Override
	public String toString() {
		return "Customers [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", age=" + age
				+ ", gender=" + gender + ", phoneNo=" + phoneNo + ", email=" + email + ", password=" + password + "]";
	}


	
	
}
