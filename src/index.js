import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* Routing v6 with new createBrowserRouter */
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from './components/error-page';
import {SQLSelectOne, SQLSelectTwo, SQLSelectThree} from './pages/SQLSelect';
import { SQLWhereOne,SQLWhereTwo, SQLWhereThree, SQLWhereFour, SQLWhereFive } from './pages/SQLWhere';
import { SQLOrderOne, SQLOrderTwo, SQLOrderThree } from './pages/SQLOrder';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/select/exercise1',
        element:<SQLSelectOne />
      },
      {
        path:'/select/exercise2',
        element:<SQLSelectTwo />
      },
      {
        path:'/select/exercise3',
        element:<SQLSelectThree />
      },{
        path:'/where/exercise1',
        element:<SQLWhereOne />
      },
      {
        path:'/where/exercise2',
        element:<SQLWhereTwo />
      },
      {
        path:'/where/exercise3',
        element:<SQLWhereThree />
      },
      {
        path:'/where/exercise4',
        element:<SQLWhereFour />
      },
      {
        path:'/where/exercise5',
        element:<SQLWhereFive />
      },
      {
        path:'/orderby/exercise1',
        element:<SQLOrderOne />
      },
      {
        path:'/orderby/exercise2',
        element:<SQLOrderTwo />
      },
      {
        path:'/orderby/exercise3',
        element:<SQLOrderThree />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
