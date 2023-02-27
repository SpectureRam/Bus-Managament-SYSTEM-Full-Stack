package com.busmanagement.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.busmanagement.entity.UserInfo;
import com.busmanagement.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/api/userinfos")
public class UserController {
	@Autowired
	UserService userService;
	//Post User
	@Operation(summary = "Create a new userinfo")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "User Created Successfully"),
			               @ApiResponse(responseCode = "400",description = "Invalid User Details")
	                      })
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(produces = "application/json", consumes = "application/json")
	public ResponseEntity<UserInfo> create(final @RequestBody UserInfo userI){
		UserInfo createuser = userService.create(userI);
		return ResponseEntity.ok(createuser);
	}
	
	//Get User
	@Operation(summary = "Get an userinfo with given email")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "User Details Retrieved Successfully"),
			               @ApiResponse(responseCode = "401",description = "Invalid User Details"),
			               @ApiResponse(responseCode = "404",description = "UserInfo not found")
	                      })
	@GetMapping(value = "/{email}",produces = "application/json")
	public ResponseEntity<Optional<UserInfo>> read(final @PathVariable String email){
		Optional<UserInfo> getuser = userService.read(email);
		return ResponseEntity.ok(getuser);
	}
}
