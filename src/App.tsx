import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes/menuItemRoute";
import Sidebar from './layout/Sidebar';
function App() {
  return (
    <Router>
      <div className="app">
          <Sidebar />
          <div className='main-content'>
            <Routes />
          </div>
      </div>
    </Router>
  );
}

export default App;
