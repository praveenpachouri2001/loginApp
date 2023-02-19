package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

	String fname;
	String lname;
	String address;
	@Id
	String email;
	String password;
	String role="User";
	
	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}


	
	
	public User(String fname, String lname, String address, String email, String password, String role) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.email = email;
		this.password = password;
		this.role = role;
	}


	
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEmail() {
		return email;
	}
	
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
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
	
	
	@Override
	public String toString() {
		return "User [fname=" + fname + ", lname=" + lname + ", address=" + address + ", email=" + email + ", password="
				+ password + ", role=" + role + "]";
	}
	
	
}
