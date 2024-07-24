// import logo from './logo.svg';
// import './App.css';
import Home from './Components/Home';
import Detailspage from './Components/Detailspage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
          <Routes>
              <Route path='' element={<Home/>}/>
              <Route path="/detailspage/:id" element={<Detailspage/>}/>
          </Routes>
          <footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
