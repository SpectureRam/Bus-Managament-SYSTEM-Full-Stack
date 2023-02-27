package com.busmanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.busmanagement.entity.UserInfo;
@Repository
public interface UserRepository extends JpaRepository<UserInfo, Long>{
	public Optional findByEmail(String email);
}