import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

const App = () =>  {
  const store = useSelector((store) => store?.reducerB)
  console.log("store B", store)
  return (
    <div className="App">
      <h4>
        Dashboard View
      </h4>
    </div>
  );
}

export default App;
