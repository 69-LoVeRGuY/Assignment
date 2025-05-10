import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Products } from './Pages/Products';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginSignUp/>} />
        <Route path='/products' element={<Products/>}>
          <Route path=':productID' element={<Products/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
