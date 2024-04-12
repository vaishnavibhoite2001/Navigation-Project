import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RouterProvider ,createBrowserRouter } from 'react-router-dom';
import Nav from'./Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Product from './Product.jsx';

let myRouter =createBrowserRouter(
  [

  {
    path:'/',
    element:<Nav />
  },
  {
    path:'/Home',
    element:<Home />
  },
  {
    path:'/Product',
    element:<Product />
  },
  {
    path:'/Contact',
    element:<Contact />
  },
  {
    path:'/About',
    element:<About />
  },
  
])

ReactDOM.render(
  <RouterProvider router={myRouter}/>
  ,document.getElementById('root')
);