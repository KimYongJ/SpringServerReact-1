import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './DeptInsert.module.css';
function DeptInsert() {
  //////// 데이터 삽입 코드 ///////////
  const [deptnoByIn, setDeptnoByIn] = useState();
  const [dname, setDname] = useState('');
  const [loc, setLoc] = useState('');
  const [show, setShow] = useState(0);
  const [fail, setFail] = useState(0);
  const deptnoChangeByIn = (e) => {
    setDeptnoByIn(e.target.value);
  };
  const dnameChange = (e) => {
    setDname(e.target.value);
    console.log(e.target.value);
  };
  const locChange = (e) => {
    setLoc(e.target.value);
    console.log(e.target.value);
  };

  const dataInsert = () => {
    setFail(0);
    const params = new URLSearchParams();
    params.append('deptno', deptnoByIn);
    params.append('dname', dname);
    params.append('loc', loc);
    axios
      .post('/api/deptform', params)
      .then((response) => {
        if (response.status == 200) {
          console.log('axios 성공');
          setShow(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        setShow(0);
        setFail(1);
      });
  };
  return (
    <>
      <div class={styles.firstView}>
        <h1>[ 데이터 삽입]</h1>
        <div>
          <button>
            <h5>
              <Link to="/">처음으로</Link>
            </h5>
          </button>
        </div>
      </div>
      <span>DEPTNO 값 입력 : </span>
      <input
        name="deptno"
        placeholder="DEPTNO값 입력"
        onChange={deptnoChangeByIn}
      />
      <br />
      <span> DNAME 값 입력 : </span>
      <input name="dname" placeholder="DNAME값 입력" onChange={dnameChange} />
      <br />
      <span> LOC 값 입력 : </span>
      <input name="loc" placeholder="LOC값 입력" onChange={locChange} />
      <br />
      <button onClick={dataInsert}>데이터 삽입</button>
      {show != 0 ? (
        <div class={styles.rowShow}>
          <hr />
          <p> DEPT 입력 성공</p>
          <p>DEPTNO 값 : {show.deptno}</p>
          <p>DNAME 값 : {show.dname}</p>
          <p>loc 값 : {show.loc}</p>
        </div>
      ) : (
        <></>
      )}
      {fail != 0 ? (
        <>
          <hr />
          <p> DEPT 입력 실패</p>
          <p>DEPTNO 값을 확인하십시요.</p>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default DeptInsert;
