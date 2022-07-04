import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './DeptDelete.module.css';
function DeptDelete() {
  //////// 데이터 삭제 코드 ///////////
  const [deptnoByDel, setDeptnoByDel] = useState();
  const [textByDel, setTextByDel] = useState();
  const [show, setShow] = useState(0);
  const [error, setError] = useState(0);
  const deleteData = () => {
    setTextByDel('');
    axios
      .get(`/api/deptnoDelete.do/${deptnoByDel}`)
      .then((response) => {
        if (response.data == 1) {
          setShow(1);
          setError(0);
        } else {
          setShow(0);
          setError(1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deptnoChangeByDel = (e) => {
    setTextByDel(e.target.value);
    setDeptnoByDel(e.target.value);
  };

  return (
    <>
      <div class={styles.firstView}>
        <h1>[데이터 삭제]</h1>
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
        onChange={deptnoChangeByDel}
        value={textByDel}
      />
      <button onClick={deleteData}>데이터 삭제</button>
      {show == 1 ? <div>삭제 성공 : DEPT 값 {deptnoByDel}</div> : <></>}
      {error == 1 ? <div>삭제 실패 DEPTNO 값을 확인하세요</div> : <></>}
    </>
  );
}

export default DeptDelete;
