package com.spring.service;

import java.util.List;


import com.spring.dto.Dept;


public interface DeptService {
	public Dept getDeptByDeptno(int deptno);
	public List<Dept> getAllDepts();
	public void insertDept(Dept dept);	
	public int deleteDept(int deptno);
	public int UpdateDeptReact(int deptno,String dname, String loc);
}
