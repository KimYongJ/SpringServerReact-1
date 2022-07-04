import { Link } from 'react-router-dom';
import styles from './DeptSelect.module.css';
import React, { useState } from 'react';
import axios from 'axios';
function DeptSelect() {
  //////// 데이터 조회 코드 ///////////
  const [text, setText] = useState('');
  const [deptno, setDeptno] = useState('');
  const [deptnoData, setDeptnoData] = useState([]);
  const [deptnoData1, setDeptnoData1] = useState(0);
  const deptnoChange = (e) => {
    setText(e.target.value);
    setDeptno(e.target.value);
  };
  const search = () => {
    axios
      .get('/api/search')
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          setDeptnoData((prev) => {
            return [...prev, response.data[i]];
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  const searchOff = () => {
    setDeptnoData([]);
    setDeptnoData1(0);
  };
  const deptnoSearch = () => {
    setText('');
    axios
      .get(`/api/deptnoSearch.do/${deptno}`)
      .then((response) => {
        setDeptnoData1(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div class={styles.select}>
      <div>
        <h1>[전체 데이터 조회]</h1>

        <button onClick={search}>조회</button>
        <button onClick={searchOff}>끄기</button>
        <div class={styles.show}>
          {deptnoData.map((data, idx) => (
            <div class={styles.rowShow}>
              <h1>[{idx + 1}]</h1>
              <p>DEPTNO 값 : {data.deptno}</p>
              <p>DNAME 값 : {data.dname}</p>
              <p>loc 값 : {data.loc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>[특정 데이터 조회]</h1>
        <span>DEPTNO 값 입력 : </span>
        <input
          name="deptno"
          placeholder="deptno값 입력"
          onChange={deptnoChange}
          value={text}
        />
        <button onClick={deptnoSearch}>데이터 조회</button>
        <button onClick={searchOff}>끄기</button>
        {deptnoData1 != 0 ? (
          <div class={styles.rowShow}>
            <p>DEPTNO 값 : {deptnoData1.deptno}</p>
            <p>DNAME 값 : {deptnoData1.dname}</p>
            <p>loc 값 : {deptnoData1.loc}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <button>
          <h5>
            <Link to="/">처음으로</Link>
          </h5>
        </button>
      </div>
    </div>
  );
}
export default DeptSelect;
