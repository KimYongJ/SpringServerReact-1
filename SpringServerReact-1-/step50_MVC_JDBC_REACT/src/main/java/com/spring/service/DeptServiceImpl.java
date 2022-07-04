package com.spring.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.spring.dto.Dept;
import com.spring.mapper.DeptMapper;
@Service // 그냥 하나의 bean이 되는 것이다. 
public class DeptServiceImpl implements DeptService {
	@Autowired
	DeptMapper deptMapper;

	@Override
	public Dept getDeptByDeptno(int deptno) {
		return deptMapper.getDeptByDeptno(deptno);
	}
	@Override
	public List<Dept> getAllDepts() {
		return deptMapper.getAllDepts();
	}
	@Override
	public void insertDept(Dept dept) {
		deptMapper.insertDept(dept);
	}
	@Override
	public int deleteDept(int deptno) {
		return deptMapper.deleteDept(deptno);
	}
	@Override
	public int UpdateDeptReact(int deptno,String dname, String loc) {
		return deptMapper.UpdateDeptReact(deptno,dname,loc);
	}	
}
