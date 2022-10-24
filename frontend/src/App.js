import React from 'react';
import {createBrowserRouter} from "react-router-dom";

import LoginScreen from './components/LoginComponent/LoginScreen.js';


const App = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
]);



export default App;
