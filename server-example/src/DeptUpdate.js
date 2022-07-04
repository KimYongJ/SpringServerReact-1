import { Link } from 'react-router-dom';
import styles from './DeptUpdate.module.css';
import React, { useState } from 'react';
import axios from 'axios';
function DeptUpdate() {
  //////// 데이터 수정 코드 ///////////
  const [deptnoByUp, setDeptnoByUp] = useState();
  const [dnameByUp, setDnameByUp] = useState();
  const [locByUp, setLocByUp] = useState();
  const [show, setShow] = useState(0);
  const [error, setError] = useState(0);

  const deptnoChangeByUp = (e) => {
    setDeptnoByUp(e.target.value);
  };
  const dnameChangeByUp = (e) => {
    setDnameByUp(e.target.value);
  };
  const LocChangeByUp = (e) => {
    setLocByUp(e.target.value);
  };
  const UpdateData = () => {
    const params1 = new URLSearchParams();
    params1.append('deptno', deptnoByUp);
    params1.append('dname', dnameByUp);
    params1.append('loc', locByUp);
    axios
      .post('/api/updatedeptform', params1)
      .then((response) => {
        if (response.data == 1) {
          setShow(1);
          setError(0);
        } else {
          setShow(0);
          setError(1);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div class={styles.firstView}>
        <h1>[DEPT 값으로 데이터 수정]</h1>
        <div>
          <button>
            <h5>
              <Link to="/">처음으로</Link>
            </h5>
          </button>
        </div>
      </div>
      <span>DEPTNO 값 입력 : </span>
      <input placeholder="DEPTNO 값 입력" onChange={deptnoChangeByUp} />
      <br />
      <span>변경할 DNAME 값 입력 : </span>
      <input placeholder="변경할 DNAME 값 입력" onChange={dnameChangeByUp} />
      <br />
      <span>변경할 LOC 값 입력 : </span>
      <input placeholder="변경할 LOC 값 입력" onChange={LocChangeByUp} />
      <br />
      <button onClick={UpdateData}>데이터 수정</button>
      {show != 0 ? <div>데이터 수정 성공</div> : <></>}
      {error != 0 ? <div>데이터 수정 실패 DEPTNO 값을 확인 하세요</div> : <></>}
    </>
  );
}

export default DeptUpdate;
