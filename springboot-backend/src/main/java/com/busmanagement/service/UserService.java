package com.busmanagement.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.busmanagement.entity.UserInfo;
import com.busmanagement.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	UserRepository userRepository;
	public UserInfo create(UserInfo openI) {
		return userRepository.save(openI);
	}
	public Optional<UserInfo>read(String email){
		return userRepository.findByEmail(email);
	}
}