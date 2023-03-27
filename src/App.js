import logo from './logo.svg';
import './App.css';

constt book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929'
  image: ''
  width: '264'
  height: '378'
};

function MagicButton (){
  return (
    <>
    <h3>This is a magic button</h3>
    <button>Magic</button>
    </>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MagicButton/>
      </header>
    </div>
  );
}

export default App;
