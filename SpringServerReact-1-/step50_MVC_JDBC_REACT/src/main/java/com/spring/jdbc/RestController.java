package com.spring.jdbc;

import java.util.List;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.dto.Dept;
import com.spring.service.DeptService;
import com.spring.service.DeptServiceImpl;

@org.springframework.web.bind.annotation.RestController// @Controller 와 @ResponseBody가 같이 붙어 있는 형태이다.
public class RestController {
	
	@Autowired
	private DeptServiceImpl deptService;
	
	// 리액트와 연결 데이터 삽입 
	@PostMapping(value = "/api/deptform", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE) // Post는 값을 생성을 해주는 것
	public Dept insertDeptForm(Dept dept) {
		deptService.insertDept(dept);
		return dept;
	}
	// 리액트와 연결 모든 데이터 검색 
	@RequestMapping(value = "/api/search", method = RequestMethod.GET)
	public List<Dept> getAllDepts(Locale locale, Model model) {
		return deptService.getAllDepts();
	}
	// 리액트와 연결 특정 데이터 검색 
	@GetMapping(value="/api/deptnoSearch.do/{id}") // url 전달시 슬래시 다음 숫자를 바로 쓰면 {id}에 값이 바로 저장된다.
	public Dept deptnoSearch(@PathVariable String id) {
		return deptService.getDeptByDeptno(Integer.parseInt(id));
	}
	// 리액트와 연결 데이터삭제 
	@GetMapping(value="/api/deptnoDelete.do/{deptno}")
	public int deleteData(@PathVariable String deptno) {
		return deptService.deleteDept(Integer.parseInt(deptno));
	}
	// 리액트와 연결 데이터 업데이트
	@PostMapping(value = "/api/updatedeptform", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE) // Post는 값을 생성을 해주는 것
	public int updateDeptForm(Dept dept) {
		return deptService.UpdateDeptReact(dept.getDeptno(),dept.getDname(),dept.getLoc());
	}	
}
