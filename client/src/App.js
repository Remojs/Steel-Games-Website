import { Route, Routes} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing-component/Landing';
import Home from './components/Home-component/Home';
import Detail from './components/Detail-component/Detail';
import Form from './components/Form-component/Form';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/home" element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/createGame' element={<Form />} />
        </Routes>
    </div>
  );
}

export default App;