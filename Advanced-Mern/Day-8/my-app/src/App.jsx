import './App.css'
import Header from './components/Header'
import Help from './components/Help'
import ResContainer from './components/ResContainer'
import Cart from './components/Cart'
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
      path:"help",
      element: <Help/>
    },
    {
      path:"cart",
      element: <Cart/>
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
