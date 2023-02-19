package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Component
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public Iterable<User>getusers(){
		Iterable<User> user = userRepository.findAll();
		return user;
	}

	public User addUser(User user) {
		userRepository.save(user);
		return user;
	}
	
	public Optional<User> getUser(String id) {
		Optional<User> user = userRepository.findById(id);
		return user;
	}

	
}
