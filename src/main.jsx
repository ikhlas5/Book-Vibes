import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import { ToastContainer } from 'react-toastify'
import BooksProvider from './Context/BookContext'
// import MainLayout from './MainLayout/MainLayout';

// const router = createBrowserRouter([
//   {
//         path: "/",
//         Component: MainLayout,
//         children: [
//             {

//             }
//         ]
        
//     }
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BooksProvider>
      <RouterProvider router={router} />
      <ToastContainer/>
    </BooksProvider>
  </StrictMode>,
)
