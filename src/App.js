import './App.css';
import { Game } from './components/Game';
import { Header } from './components/Header';

function App() {
 
  return (
    <div className="App">
      <div className='tic-tac-container'>
        <Header/>
        <Game/>
      </div>
      
    </div>
  );
}

export default App;
