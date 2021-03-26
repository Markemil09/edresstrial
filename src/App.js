import './App.css';
import logo from './imgs/oppa.png';
import { Button } from 'antd';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <img src={logo} alt="oppa" className="model-picture"/>
        </div>
        <div>
          <Button type="primary" danger>Design my look!</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
