import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./index.css";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";
import Home from './views/Home/Home'
import Buy from './views/Buy/Buy';
import MyOrders from './views/MyOrders/MyOrder'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    "path": "/",
    "element": <Home />
},
{
    "path":"/signup",
    "element":<Signup/>
},
{
    "path":"/login",
    "element":<Login/>
},
{
  "path":"/buy/:id",
  "element":<Buy/>
},
{
  "path":"/my-orders",
  "element":<MyOrders/>
}

])
root.render(<RouterProvider router={router} />);