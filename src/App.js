import logo from './logo.svg';
import './App.css';
import Chart from "./InfoProducts"
import CountProducts from './CountProducts';
import CountByCategory from './CountByCategory';
import ChartUsers from './InfoUsers';
import CountUsers from './CountUsers';

function App() {
  return (
    <div className="App">
      <Chart />
      <CountProducts />
      <CountByCategory />
      <ChartUsers />
      <CountUsers />
    </div>
  );
}

export default App;
