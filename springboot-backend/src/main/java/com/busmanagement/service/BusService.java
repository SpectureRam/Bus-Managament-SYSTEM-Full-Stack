package com.busmanagement.service;

import java.util.List;
//import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.busmanagement.entity.*;
import com.busmanagement.repository.BusRepository;

@Service
public class BusService {
	@Autowired
	BusRepository busRepository;
	
	public BusInfo create(BusInfo openI) {
		return busRepository.save(openI);
	}
	public Optional<BusInfo>getByBusID(Long id){
		return busRepository.findById(id);
	}
//	public BusInfo update(BusInfo openI){
//		return busRepository.save(openI);
//	}
//	public BusInfo update(BusInfo student)
//	  {
//	    return busRepository.save(student);
//	  }
	public BusInfo updateBus(BusInfo new_record, Long id) {
	    
	    BusInfo updateBus = busRepository.findById(id).get();
	    
	    if(updateBus == null)
	    {
	      return updateBus;
	    }
	    else
	    {
	      updateBus.setBusName(new_record.getBusName());
	      updateBus.setType(new_record.getType());
	      updateBus.setCapacity(new_record.getCapacity());
	      updateBus.setEngineNumber(new_record.getEngineNumber());
	      updateBus.setChassisNumber(new_record.getChassisNumber());
	      updateBus.setModel(new_record.getModel());
	      updateBus.setBusSource(new_record.getBusSource());
	      updateBus.setBusDestination(new_record.getBusDestination());
	      updateBus.setBusNumber(new_record.getBusNumber());
	    }
	    
	    return busRepository.save(updateBus);
	  }
	public String delete(Long id) {
		busRepository.deleteById(id);
		return id +" is deleted";
	}
	public List<BusInfo> getAll(){
	    return busRepository.findAll();
	}
//	public Iterable<BusInfo> sortascBus(String field) {
//	  return busRepository.findAll(Sort.by(Direction.ASC ,field));
//	}
//	public Iterable<BusInfo> sortdescBus(String field) {
//		  return busRepository.findAll(Sort.by(Direction.DESC ,field));
//		}
//	public Page<BusInfo> pagingBus(int page,int pageSize) {
//	   Pageable paging=PageRequest.of(page,pageSize);
//	   return busRepository.findAll(paging);
//	}
}