import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Pop from './components/Pop.jsx'
import Info from './components/Info.jsx'


//Components\
import Home from './components/Home.jsx'
import Skills from './components/SKills.jsx'
import Contact from "./components/Contact.jsx"
import Projects from "./components/Projects.jsx"



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>,
      },
      {
        path:"Projects",
        element:<Projects/>,
      },
      {
        path:"Skills",
        element:<Skills/>,
      },
      {
        path:"Contact",
        element:<Contact/>,
      },
      {
        path:"Details",
        element:<Info/>,
      },
      {path:"Options",
        element:<Pop/>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
