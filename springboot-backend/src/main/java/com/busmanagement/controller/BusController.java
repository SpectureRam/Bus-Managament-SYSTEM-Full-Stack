package com.busmanagement.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.busmanagement.entity.BusInfo;
import com.busmanagement.service.BusService;
//import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/businfos")
public class BusController {
	@Autowired
	BusService busService;
	
	//************* post bus details
	@Operation(summary = "Create a new businfo")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Businfo created successfully"),
			               @ApiResponse(responseCode = "400",description = "Businfo is invalid")
	                      })
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(produces = "application/json", consumes = "application/json")
	public ResponseEntity<BusInfo> createBus(final @RequestBody BusInfo busI){
		BusInfo createbusI = busService.create(busI);
		return ResponseEntity.ok(createbusI);
	}
	
	//*************get by id
	@Operation(summary = "Get an Businfo with given id")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "Getting businfo successfully"),
			               @ApiResponse(responseCode = "401",description = "Invalid credentials"),
			               @ApiResponse(responseCode = "404",description = "Businfo not found")
	                      })
	@GetMapping(value = "/{id}",produces = "application/json")
	public ResponseEntity<Optional<BusInfo>> getBusByID(final @PathVariable Long id){
		Optional<BusInfo> createdbus = busService.getByBusID(id);
		return ResponseEntity.ok(createdbus);
	}
	
	//************get all
	@Operation(summary = "Get all BusInfo")
    @ApiResponses(value = {@ApiResponse(responseCode = "200" , description = "Getting All BusInfo successfully"),
                 @ApiResponse(responseCode = "404" , description = "BusInfo not found")
    })
    
    @GetMapping(produces = "application/json")
    public ResponseEntity<List<BusInfo>> getBus (){
      List<BusInfo> createdbus   = busService.getAll();
      return ResponseEntity.ok(createdbus);
    }
	
	@Operation(summary = "Updates Bus Details for given id")
	  @ApiResponses(value = {
	      @ApiResponse(responseCode = "201", description = "Record was updated successfully!"),
	      @ApiResponse(responseCode = "400", description = "Could not update bus record")
	  })
	  @ResponseStatus(HttpStatus.OK)
	  @PutMapping(value = "/{id}", produces = "application/json")
	  public void updateBus(final @RequestBody BusInfo new_record, @PathVariable("id") Long id) {
	    
	    busService.updateBus(new_record, id);
	  }
	
	//**************delete by id
	@Operation(summary = "Delete the Businfo by given id")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Businfo deleted successfully"),
			               @ApiResponse(responseCode = "401",description = "Invalid credentials"),
			               @ApiResponse(responseCode = "404",description = "Businfo not found")
	                      })
	@ResponseStatus(HttpStatus.OK)
	@DeleteMapping("/{id}")
	public void deleteBus(final @PathVariable("id") Long id){
		busService.delete(id);
	}

//	//***************sorting
//	@Operation(summary = "Sorting the BusInfo in Ascending Order")
//    @ApiResponses(value = {@ApiResponse(responseCode = "201",description = "BusInfo sorted in ascending order"),
//         @ApiResponse(responseCode = "401" , description = "Invalid BusInfo"),
//         @ApiResponse(responseCode = "404" , description = "BusInfo not found")
//    })
//    @GetMapping(value = "/{fieldasc}",produces = "application/json")
//    Iterable<BusInfo> busascSort(@PathVariable ("fieldasc") String fieldasc) {
//      return busService.sortascBus(fieldasc);
//    }  
//	//***************sorting
//	@Operation(summary = "Sorting the BusInfo in Descending Order")
//	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "BusInfo sorted in descending order"),
//	      @ApiResponse(responseCode = "401" , description = "Invalid BusInfo"),
//	      @ApiResponse(responseCode = "404" , description = "BusInfo not found")
//	})
//	@GetMapping(value = "/{field}",produces = "application/json")
//	Iterable<BusInfo> busdescSort(@PathVariable ("field") String field) {
//	  return busService.sortdescBus(field);
//	}  
    //***************paging
//    @Operation(summary = "Paging the BusInfo with PageSize and PageNo")
//    @ApiResponses(value = {@ApiResponse(responseCode = "201",description = "Paging done with BusInfo successfully"),
//         @ApiResponse(responseCode = "401" , description = "Invalid BusInfo"),
//         @ApiResponse(responseCode = "404" , description = "BusInfo not found")
//    })
//    @GetMapping(value ="/paging/{pageNo}/{pageSize}",produces = "application/json")
//    Page<BusInfo> busPaging(@PathVariable ("pageNo") int pageno,@PathVariable ("pageSize") int pageSize) {
//      return busService.pagingBus(pageno, pageSize);
//    }
}
