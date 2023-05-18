import { Route, Routes} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing-component/Landing';
import Home from './components/Home-component/Home';
import Detail from './components/Detail-component/Detail';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/home" element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />} />
        </Routes>
    </div>
  );
}

export default App;