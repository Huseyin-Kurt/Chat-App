import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';

import App from "./App.js"

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={App} />

);
