import './App.css'
import Header from './components/Header'
import About from './components/About'
import ResContainer from './components/ResContainer'
import Contact from './components/Contact'
import ResDetails from './components/ResDetails'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'


const Home= () => {
  return(
    <>
      <div>
        <Header />
        <Outlet/>
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    children :[{
      path:"/",
      element: <ResContainer/>
    },
    {
      path:"about",
      element: <About/>
    },
    {
      path:"contact",
      element: <Contact/>
    },{
      path:"restaurants/:resid",
      element: <ResDetails/>
    }]
  }
])

const App = ()=>{
  return(
    <RouterProvider router={router}/>
  )
}

export default App;
