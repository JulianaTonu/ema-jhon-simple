
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import Orders from './components/Orders/Orders';
import Main from './layout/Main';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import SignOut from './components/SignOut/SignOut';
import Signup from './components/SignUp/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[

        {
          path:'/shop',
          element:<Shop></Shop>
        },
        {
          path:'/orders',
          element:<Orders></Orders>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/inventory',
          element:<Inventory></Inventory>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Signup></Signup>
        }
      ]

    }
  ])
  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
