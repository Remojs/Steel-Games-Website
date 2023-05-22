import { Route, Routes} from 'react-router-dom';
import Landing from './components/Landing-component/Landing';
import Home from './components/Home-component/Home';
import Detail from './components/Detail-component/Detail';
import Form from './components/Form-component/Form';
import Nav from './components/Nav-component/Nav';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/home" element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/createGame' element={<Form />} />
          <Route path='nav' element={<Nav />} />
        </Routes>
    </div>
  );
}

export default App;