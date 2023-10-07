import logo from './logo.svg';
import './App.css';

import All from "./Pages/All"
import Sidebar from "./Components/Sidebar"
function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <All />
    </div>
  );
}

export default App;
