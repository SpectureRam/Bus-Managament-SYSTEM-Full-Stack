package com.busmanagement.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan({"com"}) 
@EnableJpaRepositories(basePackages = "com.busmanagement.repository")
@EntityScan({ "com.busmanagement.entity" })
public class BusManagementProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(BusManagementProjectApplication.class, args);
	}

}
