import React from 'react';
import {createBrowserRouter} from "react-router-dom";

import LoginScreen from './components/LoginComponent/LoginScreen.js';
import ChatRoom from './components/ChatRoom/ChatRoom.js';


const App = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/ChatRoom",
    element: <ChatRoom />,
  },
]);



export default App;
