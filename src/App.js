import Navigation from './components/Nav';
import Header from './components/HeaderWindow';
import Herro from './components/Herro';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="header" >
        <div className="container">
          <Navigation />
          <Header />
          <Herro />
        </div>
      </header>
    </div>
  );
}

export default App;
