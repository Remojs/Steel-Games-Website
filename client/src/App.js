import { Route, Routes} from 'react-router-dom';
import Landing from './components/Landing-component/Landing';
import Home from './components/Home-component/Home';
import Detail from './components/Detail-component/Detail';
import Form from './components/Form-component/Form';
import Wip from './components/Layout-components/WorkInProgress/Wip';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/home" element={<Home />}/>
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/createGame' element={<Form />} />
          <Route path="/workinprogress" element={<Wip />}/>
        </Routes>
    </div>
  );
}

export default App;