
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Contact from './component/Contact/Contact';
import Main from './component/Layout/Main';
import Home from './component/Home/Home';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
