package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.model.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	// 모든 crud 데이터베이스 저장소
}
