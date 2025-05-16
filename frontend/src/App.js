import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Home } from './Pages/Home';
import { Product } from './Pages/Product';
import LoggedInUser from './Pages/LoggedInUser';
import AddProduct from './Pages/AddProduct';
import UpdateProduct from './Pages/UpdateProduct';
import DeleteProduct from './Pages/DeleteProduct';
import { useAuth } from './Context/AuthContext';

function App() {

  const {isLoggedIn} = useAuth();

  var time = 10;
  var now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  if (setupTime == null && isLoggedIn) {
      localStorage.setItem('setupTime', now)
  } else if (setupTime != null && isLoggedIn) {
      if(now-setupTime > time*60*1000) {
          localStorage.clear()
          localStorage.setItem('setupTime', now);
      }
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LoginSignUp/>}/>
        <Route path='/loggedin' element={<LoggedInUser/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update' element={<UpdateProduct/>}/>
        <Route path='/delete' element={<DeleteProduct/>}/>
        <Route path='/products'>
          <Route path=':id' element={<Product/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
