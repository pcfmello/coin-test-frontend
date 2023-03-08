import './App.css';
import { ConfigRouter } from './app/routes';

function App() {
  const routes = ConfigRouter();

  return <div>{routes}</div>;
}

export default App;
