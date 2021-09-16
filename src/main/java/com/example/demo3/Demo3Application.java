package com.example.demo3;

import com.example.demo3.model.Employee;
import com.example.demo3.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Demo3Application implements CommandLineRunner {

	@Autowired
	private EmployeeRepository employeeRepository;

	public static void main(String[] args) {
		SpringApplication.run(Demo3Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		/*Employee employee = new Employee();
		employee.setFirstName("simo");
		employee.setLastName("miliani");
		employee.setEmailId("simo@gmail");
		employeeRepository.save(employee);*/
	}
}
