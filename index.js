
import './App.css';
import {Route , BrowserRouter , Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';

function App() {
  return (
    <div className="App">

         
         
         <BrowserRouter>
             
             <ProtectedRoute path='/'  element={<Home/>} />
             <Route path='/login' element={<Login/>} />
             <Route path='/register' element={<Register/>} />
             <ProtectedRoute path='/booking/:carid' element={<BookingCar/>} />
             <ProtectedRoute path='/userbookings' element={<UserBookings/>} />
             <ProtectedRoute path='/addcar' element={<AddCar/>} />
             <ProtectedRoute path='/editcar/:carid' element={<EditCar/>} />
             <ProtectedRoute path='/admin' element={<AdminHome/>} />
         
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Navigate  to='/login'/>
    }

}
