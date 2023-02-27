package com.busmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.busmanagement.entity.BusInfo;

@Repository
public interface BusRepository extends JpaRepository<BusInfo ,Long>{
	
}
