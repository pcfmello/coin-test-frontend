import './App.css';
import useRates from './core/hooks/useRates.hook';

function App() {
  const obj = useRates();
  console.log('rates ', obj);
  return (
    <div className="App">
      <header className="App-header">
        <div>teste</div>
        <div>{obj}</div>
      </header>
    </div>
  );
}

export default App;
