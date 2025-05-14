import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Home } from './Pages/Home';
import { Items } from './Components/Item/Items';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Items/>} />
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/mens' />
        <Route path='/women' />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
