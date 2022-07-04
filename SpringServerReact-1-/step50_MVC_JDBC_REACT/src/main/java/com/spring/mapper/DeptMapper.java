package com.spring.mapper;

import java.util.List;


import org.apache.ibatis.annotations.Param;

import com.spring.dto.Dept;

public interface DeptMapper {
	public int deleteDept(int deptno);
	public int UpdateDeptReact(@Param("deptno") int deptno,@Param("dname")String dname,@Param("loc") String loc);
	public void insertDept(Dept dept);
	public List<Dept> getAllDepts();
	public Dept getDeptByDeptno(int deptno);
}
