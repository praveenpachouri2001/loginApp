package com.example.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin()
public class TestController {
@Autowired
	private UserService userService;

@GetMapping("/users")
public Iterable<User> getUsers(){
	Iterable<User> users = userService.getusers();
	return users;
}
@PostMapping("/user")
public User addUser(@RequestBody User user) {	
		return userService.addUser(user);
}
@GetMapping("/user/{userid}")
public Optional<User> getuser(@PathVariable("userid") String userid) {
	return userService.getUser(userid);
}
}
