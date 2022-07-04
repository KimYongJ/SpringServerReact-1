import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>[DEPT CRUD TEST]</h1>
      <button>
        <Link to="/DeptSelect">DEPT 조회</Link>
      </button>
      <br />
      <br />
      <button>
        <Link to="/DeptInsert">DEPT 추가</Link>
      </button>
      <br />
      <br />
      <button>
        <Link to="/DeptDelete">DEPT 삭제</Link>
      </button>
      <br />
      <br />
      <button>
        <Link to="/DeptUpdate">DEPT 수정</Link>
      </button>
      <br />
      <br />
    </div>
  );
}

export default App;
